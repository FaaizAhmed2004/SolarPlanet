# Design Document

## Overview

This design outlines the implementation of website rebranding from "The Solar Planet" to "The Energy Planet" and the integration of direct email functionality for quote requests. The solution will replace the current database-driven quote management system with an SMTP-based approach using the existing Resend email service integration.

## Architecture

### Current Architecture
- Frontend: Next.js application with quote form component
- Backend: Express.js API with MongoDB database storage for quotes
- Quote Flow: Form → API → Database → Admin Panel Review

### New Architecture
- Frontend: Next.js application with updated branding and enhanced quote form
- Backend: Express.js API with email service integration (no database storage)
- Quote Flow: Form → API → Email Service → Direct Email Delivery

### Email Service Integration
The backend already includes Resend as a dependency, which provides:
- Reliable email delivery
- HTML email templates
- Environment-based configuration
- Error handling and retry mechanisms

## Components and Interfaces

### Frontend Components

#### 1. Quote Form Component (`Frontend/Nextjs-BoilerPlate/src/components/Qoute/Qoute.tsx`)
**Current State:** Submits to `/v1/Quote` endpoint expecting database storage
**New State:** Enhanced with better user feedback and email-optimized data formatting

**Interface Changes:**
```typescript
interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  interests: string[];
  dailyEnergyConsumption: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  emailSent?: boolean;
}
```

#### 2. Branding Components
**Components to Update:**
- `Footer.tsx` - Company name and copyright
- `Herosection.tsx` - Location reference
- `dashboard-layout.tsx` - Admin panel branding
- `layout.tsx` - Page title metadata

### Backend Components

#### 1. Email Service Module
**New Module:** `src/services/emailService.ts`
**Purpose:** Handle all email operations using Resend

**Interface:**
```typescript
interface EmailService {
  sendQuoteRequest(quoteData: QuoteFormData): Promise<EmailResult>;
  sendConfirmationEmail(customerEmail: string, customerName: string): Promise<EmailResult>;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
```

#### 2. Quote Controller Refactor
**Current:** `src/APIs/Quote/Controller/controller.ts`
**Changes:** Replace database operations with email service calls

**New Interface:**
```typescript
interface QuoteController {
  submitQuote(req: Request, res: Response): Promise<Response>;
  // Remove: getAllQuotes, getQuoteById, updateQuote, deleteQuote
}
```

#### 3. Email Templates
**New Module:** `src/templates/emailTemplates.ts`
**Purpose:** HTML email templates for business and customer emails

## Data Models

### Quote Email Data Structure
```typescript
interface QuoteEmailData {
  // Customer Information
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    suburb: string;
  };
  
  // Service Requirements
  interests: string[];
  dailyEnergyConsumption: string;
  
  // Metadata
  submittedAt: Date;
  source: 'website';
}
```

### Email Configuration
```typescript
interface EmailConfig {
  apiKey: string;
  fromEmail: string;
  businessEmail: string;
  replyToEmail: string;
}
```

## Error Handling

### Frontend Error Handling
1. **Network Errors:** Display user-friendly message with retry option
2. **Validation Errors:** Real-time form validation with specific field errors
3. **Email Service Errors:** Distinguish between temporary and permanent failures

### Backend Error Handling
1. **Email Service Failures:** Log detailed errors, return generic user message
2. **Configuration Errors:** Validate environment variables on startup
3. **Rate Limiting:** Implement rate limiting for quote submissions

**Error Response Format:**
```typescript
interface ErrorResponse {
  success: false;
  message: string;
  code?: string;
  retryable?: boolean;
}
```

## Testing Strategy

### Frontend Testing
1. **Component Tests:** Quote form validation and submission
2. **Integration Tests:** API communication and error handling
3. **Visual Tests:** Branding consistency across components
4. **Accessibility Tests:** Form accessibility compliance

### Backend Testing
1. **Unit Tests:** Email service functionality
2. **Integration Tests:** Email template rendering
3. **Error Handling Tests:** Various failure scenarios
4. **Configuration Tests:** Environment variable validation

### Email Testing
1. **Template Tests:** HTML rendering and formatting
2. **Delivery Tests:** Email sending functionality (using test mode)
3. **Content Tests:** Verify all form data is included correctly

## Security Considerations

### Email Security
1. **Input Sanitization:** Sanitize all user inputs before including in emails
2. **Rate Limiting:** Prevent spam submissions
3. **Email Validation:** Validate email formats and domains
4. **Content Security:** Escape HTML content in email templates

### Configuration Security
1. **Environment Variables:** Store all sensitive data in environment variables
2. **API Key Protection:** Secure storage and rotation of email service API keys
3. **Error Logging:** Log errors without exposing sensitive information

## Implementation Phases

### Phase 1: Branding Update
- Update all frontend components with new brand name
- Update metadata and titles
- Test visual consistency

### Phase 2: Email Service Integration
- Implement email service module
- Create email templates
- Update quote controller

### Phase 3: Frontend Integration
- Update quote form to handle email responses
- Enhance user feedback and error handling
- Remove admin panel dependencies

### Phase 4: Database Cleanup
- Remove quote-related database operations
- Clean up unused routes and controllers
- Update API documentation

## Configuration Requirements

### Environment Variables
```bash
# Email Service (already configured)
EMAIL_SERVICE_API_KEY="your-resend-api-key"

# New email configuration
BUSINESS_EMAIL="quotes@theenergyplanet.com.au"
FROM_EMAIL="noreply@theenergyplanet.com.au"
REPLY_TO_EMAIL="info@theenergyplanet.com.au"
```

### Email Templates Location
- Business notification template: `src/templates/quoteNotification.html`
- Customer confirmation template: `src/templates/quoteConfirmation.html`

## Performance Considerations

### Email Delivery
- Asynchronous email sending to avoid blocking API responses
- Retry mechanism for failed email deliveries
- Timeout handling for email service calls

### Frontend Performance
- Optimistic UI updates for better user experience
- Form validation to reduce unnecessary API calls
- Loading states during submission process

## Monitoring and Logging

### Email Monitoring
- Track email delivery success rates
- Monitor email service API usage
- Alert on email delivery failures

### Application Logging
- Log all quote submissions (without sensitive data)
- Track form submission patterns
- Monitor API response times