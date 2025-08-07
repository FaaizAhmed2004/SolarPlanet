# Requirements Document

## Introduction

This feature involves rebranding the website from "The Solar Planet" to "The Energy Planet" and implementing direct email functionality for quote requests. The current system stores quote requests in a database for admin panel review, but the new system should send quote requests directly to business email addresses via SMTP, eliminating the need for admin panel management of quotes.

## Requirements

### Requirement 1

**User Story:** As a business owner, I want the website to reflect our new brand name "The Energy Planet" instead of "The Solar Planet", so that our brand identity is consistent across all touchpoints.

#### Acceptance Criteria

1. WHEN a user visits any page of the website THEN the website title SHALL display "The Energy Planet"
2. WHEN a user views the footer THEN the company name SHALL display "The Energy Planet Australia"
3. WHEN a user views the hero section THEN the location reference SHALL display "The Energy Planet Melbourne"
4. WHEN a user accesses the admin dashboard THEN the sidebar SHALL display "Energy Planet" as the company name
5. WHEN a user views any copyright notices THEN they SHALL reference "The Energy Planet Australia"

### Requirement 2

**User Story:** As a potential customer, I want to submit quote requests that are automatically sent to the business via email, so that I can receive faster responses without depending on admin panel monitoring.

#### Acceptance Criteria

1. WHEN a user submits a valid quote form THEN the system SHALL send an email to the business email address containing all form details
2. WHEN a user submits a quote form THEN the system SHALL send a confirmation email to the user acknowledging receipt of their request
3. WHEN the email sending process fails THEN the system SHALL display an appropriate error message to the user
4. WHEN the email is successfully sent THEN the system SHALL display a success message confirming the quote request was submitted
5. IF the user provides invalid email format THEN the system SHALL prevent form submission and display validation errors

### Requirement 3

**User Story:** As a business owner, I want quote requests to be sent directly to my email inbox with all customer details formatted clearly, so that I can respond quickly without accessing an admin panel.

#### Acceptance Criteria

1. WHEN a quote request is submitted THEN the email SHALL contain the customer's full name, email, phone, address, and suburb
2. WHEN a quote request is submitted THEN the email SHALL list all selected interests in a readable format
3. WHEN a quote request is submitted THEN the email SHALL include the daily energy consumption information
4. WHEN a quote request is submitted THEN the email subject line SHALL clearly identify it as a quote request
5. WHEN a quote request is submitted THEN the email SHALL be formatted in HTML for better readability

### Requirement 4

**User Story:** As a system administrator, I want the SMTP configuration to be environment-based and secure, so that email credentials are not exposed in the codebase.

#### Acceptance Criteria

1. WHEN the system is deployed THEN SMTP credentials SHALL be stored in environment variables
2. WHEN the system starts THEN it SHALL validate that all required SMTP environment variables are present
3. WHEN SMTP authentication fails THEN the system SHALL log the error securely without exposing credentials
4. IF SMTP configuration is missing THEN the system SHALL provide clear error messages for debugging
5. WHEN emails are sent THEN the system SHALL use secure connection protocols (TLS/SSL)

### Requirement 5

**User Story:** As a developer, I want the database storage of quotes to be removed since quotes will be handled via email, so that the system is simplified and doesn't store unnecessary data.

#### Acceptance Criteria

1. WHEN a quote is submitted THEN the system SHALL NOT store the quote data in the database
2. WHEN the quote form is submitted THEN the system SHALL only use the data for email sending purposes
3. WHEN the backend processes a quote request THEN it SHALL remove all database-related quote operations
4. WHEN the admin panel is accessed THEN quote management features SHALL be removed or hidden
5. IF the email sending fails THEN the system SHALL NOT fall back to database storage