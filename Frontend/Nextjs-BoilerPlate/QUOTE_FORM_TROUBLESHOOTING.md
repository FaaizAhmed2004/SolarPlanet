# Quote Form Troubleshooting Guide

## Overview
This guide helps diagnose and fix issues with the quote form submission system.

## Common Error Messages and Solutions

### "An error occurred while processing your request. Please try again later."

This is a generic error message that can have several causes:

#### 0. Nodemailer Method Error (FIXED)
**Error:** `nodemailer.createTransporter is not a function`
**Solution:** The correct method name is `createTransport` (without 'r'). This has been fixed in the code.

#### 1. Email Configuration Issues
**Symptoms:**
- Form submits but shows generic error
- No emails are sent
- Server logs show SMTP errors

**Solutions:**
1. Check environment variables in `.env`:
   ```
   SMTP_HOST=mail.privateemail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=info@theenergyplanet.com
   SMTP_PASS=TheEnergyPlanet@1234
   BUSINESS_EMAIL=info@theenergyplanet.com
   FROM_EMAIL=info@theenergyplanet.com
   ```

2. Test email configuration:
   ```bash
   curl http://localhost:3000/api/test-quote
   ```

3. Verify SMTP credentials with your email provider

#### 2. Network/Connection Issues
**Symptoms:**
- "Request timed out" message
- "Network error" message
- Form hangs during submission

**Solutions:**
1. Check internet connection
2. Verify server is running on correct port
3. Check firewall settings
4. Test with different network

#### 3. Server Configuration Issues
**Symptoms:**
- 500 Internal Server Error
- "Server error" messages
- API endpoint not responding

**Solutions:**
1. Check server logs for detailed errors
2. Restart the development server
3. Verify all dependencies are installed:
   ```bash
   npm install
   ```

## Debugging Steps

### Step 1: Test Email Configuration
Visit: `http://localhost:3000/api/test-quote`

Expected response:
```json
{
  "success": true,
  "message": "Email configuration is valid",
  "config": {
    "host": "mail.privateemail.com",
    "port": 587,
    "secure": false,
    "user": "info@theenergyplanet.com",
    "businessEmail": "info@theenergyplanet.com",
    "fromEmail": "info@theenergyplanet.com"
  }
}
```

### Step 2: Test Basic API Endpoint
```bash
curl -X POST http://localhost:3000/api/test-quote
```

Expected response:
```json
{
  "success": true,
  "message": "Test quote endpoint is working",
  "timestamp": "2025-01-XX..."
}
```

### Step 3: Test Quote Submission
Use the form or test with curl:
```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "address": "123 Test St",
    "suburb": "Test Suburb",
    "interests": ["Residential Solar"],
    "dailyEnergyConsumption": "15kWh per day"
  }'
```

### Step 4: Check Server Logs
Look for error messages in the console where you're running the development server.

## Environment Variables Checklist

Ensure all required environment variables are set:

- [ ] `SMTP_HOST` - Email server hostname
- [ ] `SMTP_PORT` - Email server port (usually 587)
- [ ] `SMTP_SECURE` - Set to "false" for port 587
- [ ] `SMTP_USER` - Your email address
- [ ] `SMTP_PASS` - Your email password
- [ ] `BUSINESS_EMAIL` - Where quote requests are sent
- [ ] `FROM_EMAIL` - From address for emails

## Email Provider Specific Settings

### Namecheap Private Email
```
SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Gmail
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```
*Note: Requires App Password, not regular password*

### Outlook/Hotmail
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

## Form Validation Errors

The form validates the following fields:

1. **Full Name** - Required, non-empty string
2. **Email** - Required, must contain '@' symbol
3. **Phone** - Required, non-empty string
4. **Address** - Required, non-empty string
5. **Suburb** - Required, non-empty string
6. **Interests** - At least one option must be selected
7. **Daily Energy Consumption** - Required, non-empty string

## API Response Codes

- **200** - Success, quote submitted and emails sent
- **400** - Validation error, check form data
- **500** - Server error, check configuration and logs

## Enhanced Error Messages

The system now provides specific error messages for:

- **Network errors** - Connection issues
- **Timeout errors** - Request took too long
- **Authentication errors** - Email login failed
- **Validation errors** - Form data issues
- **Server errors** - Internal server problems

## Testing Checklist

Before deploying, test:

- [ ] Form loads correctly with dark theme
- [ ] All form fields accept input
- [ ] Form validation works for each field
- [ ] Error messages display correctly
- [ ] Success message shows after submission
- [ ] Business email is received
- [ ] Customer confirmation email is sent
- [ ] Form resets after successful submission

## Performance Optimizations

The quote form includes:

- **30-second timeout** - Prevents hanging requests
- **AbortController** - Allows request cancellation
- **Loading states** - Shows submission progress
- **Error recovery** - Allows retry after errors
- **Form validation** - Prevents invalid submissions

## Security Features

- **Input sanitization** - Prevents malicious input
- **Email validation** - Ensures valid email addresses
- **Rate limiting** - Prevents spam (can be added)
- **CSRF protection** - Built into Next.js

## Monitoring and Logging

The system logs:

- **Successful submissions** - With customer email
- **Failed submissions** - With error details
- **SMTP connection status** - For debugging
- **Email sending results** - Success/failure

## Support Information

If issues persist:

1. Check the server console for detailed error messages
2. Verify email provider settings
3. Test with a different email address
4. Contact your hosting provider if using production
5. Check firewall and security settings

## Quick Fixes

### Form Not Submitting
1. Check browser console for JavaScript errors
2. Verify API endpoint is accessible
3. Check network tab in browser dev tools

### Emails Not Sending
1. Verify SMTP credentials
2. Check email provider settings
3. Test with a different email service

### Styling Issues
1. Check if Tailwind CSS is loaded
2. Verify dark theme classes are applied
3. Check for CSS conflicts

## Development vs Production

### Development
- Use `.env.local` for environment variables
- Check console logs for debugging
- Use test email addresses

### Production
- Use secure environment variable storage
- Enable proper logging
- Use production email addresses
- Test thoroughly before deployment