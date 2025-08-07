import { Resend } from 'resend'
import config from '../config/config'
import logger from '../handlers/logger'

const resend = new Resend(config.EMAIL_API_KEY)

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  interests: string[];
  dailyEnergyConsumption: string;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Validate email configuration on startup
const validateEmailConfig = () => {
  if (!config.EMAIL_API_KEY) {
    throw new Error('EMAIL_SERVICE_API_KEY is required but not configured')
  }
  if (!config.BUSINESS_EMAIL) {
    throw new Error('BUSINESS_EMAIL is required but not configured')
  }
  if (!config.FROM_EMAIL) {
    throw new Error('FROM_EMAIL is required but not configured')
  }
}

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
  `
}

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
            <p><strong>Email:</strong> theenergyplanet@gmail.com</p>
            <p><strong>Phone:</strong> Available in our quote response</p>
            <p><strong>Location:</strong> Melbourne, Australia</p>
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
  `
}

export default {
    // Initialize and validate configuration
    init: () => {
        try {
            validateEmailConfig()
            logger.info('Email service initialized successfully', {
                meta: {
                    service: 'email',
                    action: 'initialization',
                    status: 'success'
                }
            })
        } catch (error) {
            logger.error('Email service initialization failed', {
                meta: {
                    service: 'email',
                    action: 'initialization',
                    status: 'failed',
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            })
            throw error
        }
    },

    // Legacy method for backward compatibility
    sendEmail: async (to: string[], subject: string, text: string): Promise<EmailResult> => {
        try {
            const result = await resend.emails.send({
                from: config.FROM_EMAIL || 'noreply@theenergyplanet.com.au',
                to,
                subject,
                text
            })
            
            return {
                success: true,
                messageId: result.data?.id
            }
        } catch (error) {
            logger.error('Legacy email sending failed', {
                meta: {
                    service: 'email',
                    action: 'send_legacy_email',
                    status: 'failed',
                    recipients: to,
                    subject,
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            })
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown email error'
            }
        }
    },

    // Send quote request to business
    sendQuoteRequest: async (quoteData: QuoteFormData): Promise<EmailResult> => {
        try {
            const htmlContent = createQuoteNotificationEmail(quoteData)
            
            const result = await resend.emails.send({
                from: config.FROM_EMAIL || 'noreply@theenergyplanet.com.au',
                to: [config.BUSINESS_EMAIL || 'theenergyplanet@gmail.com'],
                replyTo: quoteData.email,
                subject: `New Quote Request from ${quoteData.fullName} - ${quoteData.suburb}`,
                html: htmlContent
            })
            
            logger.info('Quote request email sent successfully', {
                meta: {
                    service: 'email',
                    action: 'send_quote_request',
                    status: 'success',
                    messageId: result.data?.id,
                    customerEmail: quoteData.email,
                    customerName: quoteData.fullName,
                    suburb: quoteData.suburb,
                    interests: quoteData.interests
                }
            })
            
            return {
                success: true,
                messageId: result.data?.id
            }
        } catch (error) {
            logger.error('Quote request email failed', {
                meta: {
                    service: 'email',
                    action: 'send_quote_request',
                    status: 'failed',
                    customerEmail: quoteData.email,
                    customerName: quoteData.fullName,
                    suburb: quoteData.suburb,
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            })
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to send quote request'
            }
        }
    },

    // Send confirmation email to customer
    sendConfirmationEmail: async (customerEmail: string, customerName: string): Promise<EmailResult> => {
        try {
            const htmlContent = createCustomerConfirmationEmail(customerName)
            
            const result = await resend.emails.send({
                from: config.FROM_EMAIL || 'noreply@theenergyplanet.com.au',
                to: [customerEmail],
                subject: 'Your Quote Request Has Been Received - The Energy Planet',
                html: htmlContent
            })
            
            logger.info('Confirmation email sent successfully', {
                meta: {
                    service: 'email',
                    action: 'send_confirmation_email',
                    status: 'success',
                    messageId: result.data?.id,
                    customerEmail,
                    customerName
                }
            })
            
            return {
                success: true,
                messageId: result.data?.id
            }
        } catch (error) {
            logger.error('Confirmation email failed', {
                meta: {
                    service: 'email',
                    action: 'send_confirmation_email',
                    status: 'failed',
                    customerEmail,
                    customerName,
                    error: error instanceof Error ? error.message : 'Unknown error'
                }
            })
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to send confirmation email'
            }
        }
    }
}
