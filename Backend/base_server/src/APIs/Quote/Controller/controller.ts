import { Request, Response } from 'express';
import emailService from '../../../services/email';
import logger from '../../../handlers/logger';

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  interests: string[];
  dailyEnergyConsumption: string;
}

// Validate quote form data
const validateQuoteData = (data: unknown): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length === 0) {
    errors.push('Full name is required');
  }
  
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    errors.push('Valid email address is required');
  }
  
  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length === 0) {
    errors.push('Phone number is required');
  }
  
  if (!data.address || typeof data.address !== 'string' || data.address.trim().length === 0) {
    errors.push('Address is required');
  }
  
  if (!data.suburb || typeof data.suburb !== 'string' || data.suburb.trim().length === 0) {
    errors.push('Suburb is required');
  }
  
  if (!data.dailyEnergyConsumption || typeof data.dailyEnergyConsumption !== 'string' || data.dailyEnergyConsumption.trim().length === 0) {
    errors.push('Daily energy consumption is required');
  }
  
  // Validate interests
  const validInterests = [
    'Commercial Solar',
    'Residential Solar',
    'Battery Storage',
    'Radiant Heating',
    'Split System',
    'EV Charging',
    'Pool Heat Pump'
  ];
  
  if (!Array.isArray(data.interests)) {
    errors.push('Interests must be an array of valid options');
  } else {
    const filteredInterests = data.interests.filter((interest: string) =>
      validInterests.includes(interest)
    );
    
    if (filteredInterests.length === 0) {
      errors.push('At least one valid interest must be selected');
    }
    
    // Update the data with filtered interests
    data.interests = filteredInterests;
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Submit quote request via email
export const submitQuote = async (req: Request, res: Response) => {
  try {
    // Validate the request data
    const validation = validateQuoteData(req.body);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }
    
    const quoteData: QuoteFormData = {
      fullName: req.body.fullName.trim(),
      email: req.body.email.trim().toLowerCase(),
      phone: req.body.phone.trim(),
      address: req.body.address.trim(),
      suburb: req.body.suburb.trim(),
      interests: req.body.interests,
      dailyEnergyConsumption: req.body.dailyEnergyConsumption.trim()
    };
    
    // Send quote request email to business
    const businessEmailResult = await emailService.sendQuoteRequest(quoteData);
    
    if (!businessEmailResult.success) {
      logger.error('Quote submission failed - business email error', {
        meta: {
          controller: 'quote',
          action: 'submit_quote',
          status: 'failed',
          reason: 'business_email_failed',
          customerEmail: quoteData.email,
          error: businessEmailResult.error
        }
      });
      return res.status(500).json({
        success: false,
        message: 'Failed to submit quote request. Please try again later.',
        retryable: true
      });
    }
    
    // Send confirmation email to customer
    const confirmationEmailResult = await emailService.sendConfirmationEmail(
      quoteData.email,
      quoteData.fullName
    );
    
    if (!confirmationEmailResult.success) {
      logger.warn('Quote submission succeeded but confirmation email failed', {
        meta: {
          controller: 'quote',
          action: 'submit_quote',
          status: 'partial_success',
          reason: 'confirmation_email_failed',
          customerEmail: quoteData.email,
          error: confirmationEmailResult.error
        }
      });
      // Don't fail the request if confirmation email fails, but log it
    }
    
    logger.info('Quote submission completed successfully', {
      meta: {
        controller: 'quote',
        action: 'submit_quote',
        status: 'success',
        customerEmail: quoteData.email,
        customerName: quoteData.fullName,
        suburb: quoteData.suburb,
        interests: quoteData.interests,
        businessEmailSent: businessEmailResult.success,
        confirmationEmailSent: confirmationEmailResult.success
      }
    });
    
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your quote request has been submitted successfully. We\'ll be in touch soon.',
      emailSent: true
    });
    
  } catch (error: unknown) {
    logger.error('Quote submission unexpected error', {
      meta: {
        controller: 'quote',
        action: 'submit_quote',
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      }
    });
    
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request. Please try again later.',
        retryable: true
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'An unknown error occurred. Please try again later.',
      retryable: true
    });
  }
};

// Legacy method name for backward compatibility
export const createQuote = submitQuote;