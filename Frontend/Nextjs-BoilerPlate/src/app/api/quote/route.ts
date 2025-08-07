import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmailConfig, getEmailConfig } from '@/lib/email-config';

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
const validateQuoteData = (data: any): { isValid: boolean; errors: string[] } => {
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

// Create email transporter
const createTransporter = () => {
  try {
    validateEmailConfig();
    const config = getEmailConfig();
    
    console.log('Creating SMTP transporter with config:', {
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      user: config.smtp.auth.user
    });
    
    return nodemailer.createTransport(config.smtp);
  } catch (error) {
    console.error('Email configuration error:', error);
    throw error;
  }
};

// Create HTML template for business notification
const createQuoteNotificationEmail = (quoteData: QuoteFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Quote Request - The Energy Planet</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .interests { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 5px; }
        .interest-tag { background-color: #dc2626; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Quote Request</h1>
          <p>The Energy Planet Australia</p>
        </div>
        
        <div class="content">
          <h2>Customer Information</h2>
          
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${quoteData.fullName}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${quoteData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${quoteData.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Address:</div>
            <div class="value">${quoteData.address}</div>
          </div>
          
          <div class="field">
            <div class="label">Suburb:</div>
            <div class="value">${quoteData.suburb}</div>
          </div>
          
          <div class="field">
            <div class="label">Interests:</div>
            <div class="interests">
              ${quoteData.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
          </div>
          
          <div class="field">
            <div class="label">Daily Energy Consumption:</div>
            <div class="value">${quoteData.dailyEnergyConsumption}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This quote request was submitted through The Energy Planet website.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Create HTML template for customer confirmation
const createCustomerConfirmationEmail = (customerName: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Quote Request Received - The Energy Planet</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .contact-info { background-color: #fff; padding: 15px; border-left: 4px solid #dc2626; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Quote Request!</h1>
          <p>The Energy Planet Australia</p>
        </div>
        
        <div class="content">
          <p>Dear ${customerName},</p>
          
          <p>Thank you for your interest in The Energy Planet Australia! We have received your quote request and our team will review it shortly.</p>
          
          <p>What happens next:</p>
          <ul>
            <li>Our energy specialists will review your requirements</li>
            <li>We'll contact you within 24-48 hours to discuss your needs</li>
            <li>We'll arrange a convenient time for a site assessment if needed</li>
            <li>You'll receive a detailed, customized quote</li>
          </ul>
          
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> info@theenergyplanet.com</p>
            <p><strong>Phone:</strong> +61 433 866 320</p>
            <p><strong>Address:</strong> 23 Birmingham Street, Spotswood, Victoria 3015</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
          
          <p>Best regards,<br>The Energy Planet Australia Team</p>
        </div>
        
        <div class="footer">
          <p>© 2025 The Energy Planet Australia. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const validation = validateQuoteData(body);
    
    if (!validation.isValid) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      }, { status: 400 });
    }
    
    const quoteData: QuoteFormData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      address: body.address.trim(),
      suburb: body.suburb.trim(),
      interests: body.interests,
      dailyEnergyConsumption: body.dailyEnergyConsumption.trim()
    };
    
    // Create email transporter
    const transporter = createTransporter();
    
    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP connection failed:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Email service is currently unavailable. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('authentication')) {
          errorMessage = 'Email authentication failed. Please contact support.';
        } else if (error.message.includes('connection')) {
          errorMessage = 'Unable to connect to email server. Please try again later.';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'Email server timeout. Please try again.';
        }
      }
      
      return NextResponse.json({
        success: false,
        message: errorMessage,
        retryable: true
      }, { status: 500 });
    }
    
    // Send quote request email to business
    try {
      const businessEmailHtml = createQuoteNotificationEmail(quoteData);
      
      const config = getEmailConfig();
      
      await transporter.sendMail({
        from: config.addresses.from,
        to: config.addresses.business,
        replyTo: quoteData.email,
        subject: `New Quote Request from ${quoteData.fullName} - ${quoteData.suburb}`,
        html: businessEmailHtml
      });
      
      console.log('Business email sent successfully for:', quoteData.email);
    } catch (error) {
      console.error('Failed to send business email:', error);
      return NextResponse.json({
        success: false,
        message: 'Failed to submit quote request. Please try again later.',
        retryable: true
      }, { status: 500 });
    }
    
    // Send confirmation email to customer
    try {
      const confirmationEmailHtml = createCustomerConfirmationEmail(quoteData.fullName);
      
      const config = getEmailConfig();
      
      await transporter.sendMail({
        from: config.addresses.from,
        to: quoteData.email,
        subject: 'Your Quote Request Has Been Received - The Energy Planet',
        html: confirmationEmailHtml
      });
      
      console.log('Confirmation email sent successfully to:', quoteData.email);
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      // Don't fail the request if confirmation email fails, but log it
    }
    
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your quote request has been submitted successfully. We\'ll be in touch soon.',
      emailSent: true
    });
    
  } catch (error) {
    console.error('Quote submission error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
      retryable: true
    }, { status: 500 });
  }
}