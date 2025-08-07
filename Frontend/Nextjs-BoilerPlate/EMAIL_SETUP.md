# Email Setup Guide for The Energy Planet

This guide explains how to set up email functionality for quote requests using Nodemailer in the Next.js application.

## Overview

The application now uses Nodemailer to send emails directly from the Next.js API routes instead of relying on a separate backend service. When users submit quote requests, the system will:

1. Send a detailed quote request email to your business email
2. Send a confirmation email to the customer
3. Handle errors gracefully with user-friendly messages

## Environment Variables Setup

Create a `.env.local` file in the root of your Next.js project with the following variables:

```bash
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Addresses
BUSINESS_EMAIL=theenergyplanet@gmail.com
FROM_EMAIL=noreply@theenergyplanet.com.au
```

## Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password
1. In Google Account settings, go to Security
2. Under "2-Step Verification", click on "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Enter "The Energy Planet Website" as the device name
5. Copy the generated 16-character password
6. Use this password as your `SMTP_PASS` value

### Step 3: Configure Environment Variables
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-character-app-password
BUSINESS_EMAIL=theenergyplanet@gmail.com
FROM_EMAIL=noreply@theenergyplanet.com.au
```

## Other Email Providers

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP Server
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-password
```

## Testing the Setup

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to your website and fill out the quote form

3. Submit the form and check:
   - Your business email for the quote request
   - The customer's email for the confirmation message
   - The browser console for any error messages

## Troubleshooting

### Common Issues

1. **"SMTP connection failed"**
   - Check your SMTP credentials
   - Ensure 2FA is enabled for Gmail
   - Verify the app password is correct

2. **"Authentication failed"**
   - Double-check your username and password
   - For Gmail, ensure you're using an app password, not your regular password

3. **"Connection timeout"**
   - Check if your hosting provider blocks SMTP ports
   - Try using port 465 with `SMTP_SECURE=true`

4. **Emails not being received**
   - Check spam/junk folders
   - Verify the recipient email addresses are correct
   - Check your email provider's sending limits

### Debug Mode

To enable debug logging, add this to your environment variables:
```bash
DEBUG_EMAIL=true
```

This will log detailed information about email sending attempts to the console.

## Security Considerations

1. **Never commit `.env.local` to version control**
2. **Use app passwords instead of regular passwords**
3. **Regularly rotate your email credentials**
4. **Monitor your email sending limits**
5. **Use a dedicated email account for sending**

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add all environment variables to your hosting platform's environment settings
2. Test the email functionality in production
3. Monitor email delivery rates
4. Set up proper error logging and monitoring

## Email Templates

The system includes two HTML email templates:

1. **Business Notification**: Sent to your business email with all quote details
2. **Customer Confirmation**: Sent to the customer confirming receipt of their request

Both templates are responsive and include The Energy Planet branding.

## API Endpoint

The quote submission endpoint is available at:
```
POST /api/quote
```

It accepts the following JSON payload:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "0412345678",
  "address": "123 Test Street",
  "suburb": "Melbourne",
  "interests": ["Residential Solar", "Battery Storage"],
  "dailyEnergyConsumption": "15kWh per day"
}
```

## Support

If you encounter issues with the email setup, check:
1. Environment variables are correctly set
2. SMTP credentials are valid
3. Network connectivity allows SMTP connections
4. Email provider limits haven't been exceeded