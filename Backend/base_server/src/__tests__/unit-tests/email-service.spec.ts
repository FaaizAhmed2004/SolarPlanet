import emailService from '../../services/email';

// Mock the Resend module
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn()
    }
  }))
}));

// Mock the config
jest.mock('../../config/config', () => ({
  default: {
    EMAIL_API_KEY: 'test-api-key',
    BUSINESS_EMAIL: 'test@theenergyplanet.com.au',
    FROM_EMAIL: 'noreply@theenergyplanet.com.au',
    REPLY_TO_EMAIL: 'info@theenergyplanet.com.au'
  }
}));

describe('Email Service', () => {
  const mockQuoteData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '0412345678',
    address: '123 Test Street',
    suburb: 'Melbourne',
    interests: ['Residential Solar', 'Battery Storage'],
    dailyEnergyConsumption: '15kWh per day'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('sendQuoteRequest', () => {
    it('should send quote request email successfully', async () => {
      const mockSend = jest.fn().mockResolvedValue({
        data: { id: 'test-message-id' }
      });
      
      // Mock the Resend instance
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      const result = await emailService.sendQuoteRequest(mockQuoteData);

      expect(result.success).toBe(true);
      expect(result.messageId).toBe('test-message-id');
      expect(mockSend).toHaveBeenCalledWith({
        from: 'noreply@theenergyplanet.com.au',
        to: ['test@theenergyplanet.com.au'],
        replyTo: 'john@example.com',
        subject: 'New Quote Request from John Doe - Melbourne',
        html: expect.stringContaining('John Doe')
      });
    });

    it('should handle email sending failure', async () => {
      const mockSend = jest.fn().mockRejectedValue(new Error('Email service error'));
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      const result = await emailService.sendQuoteRequest(mockQuoteData);

      expect(result.success).toBe(false);
      expect(result.error).toBe('Email service error');
    });

    it('should include all quote data in email HTML', async () => {
      const mockSend = jest.fn().mockResolvedValue({
        data: { id: 'test-message-id' }
      });
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      await emailService.sendQuoteRequest(mockQuoteData);

      const emailCall = mockSend.mock.calls[0][0];
      const htmlContent = emailCall.html;

      expect(htmlContent).toContain('John Doe');
      expect(htmlContent).toContain('john@example.com');
      expect(htmlContent).toContain('0412345678');
      expect(htmlContent).toContain('123 Test Street');
      expect(htmlContent).toContain('Melbourne');
      expect(htmlContent).toContain('Residential Solar');
      expect(htmlContent).toContain('Battery Storage');
      expect(htmlContent).toContain('15kWh per day');
    });
  });

  describe('sendConfirmationEmail', () => {
    it('should send confirmation email successfully', async () => {
      const mockSend = jest.fn().mockResolvedValue({
        data: { id: 'confirmation-message-id' }
      });
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      const result = await emailService.sendConfirmationEmail('john@example.com', 'John Doe');

      expect(result.success).toBe(true);
      expect(result.messageId).toBe('confirmation-message-id');
      expect(mockSend).toHaveBeenCalledWith({
        from: 'noreply@theenergyplanet.com.au',
        to: ['john@example.com'],
        subject: 'Your Quote Request Has Been Received - The Energy Planet',
        html: expect.stringContaining('John Doe')
      });
    });

    it('should handle confirmation email failure', async () => {
      const mockSend = jest.fn().mockRejectedValue(new Error('Confirmation email failed'));
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      const result = await emailService.sendConfirmationEmail('john@example.com', 'John Doe');

      expect(result.success).toBe(false);
      expect(result.error).toBe('Confirmation email failed');
    });

    it('should personalize confirmation email with customer name', async () => {
      const mockSend = jest.fn().mockResolvedValue({
        data: { id: 'test-id' }
      });
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      await emailService.sendConfirmationEmail('jane@example.com', 'Jane Smith');

      const emailCall = mockSend.mock.calls[0][0];
      const htmlContent = emailCall.html;

      expect(htmlContent).toContain('Dear Jane Smith');
      expect(htmlContent).toContain('The Energy Planet Australia');
    });
  });

  describe('legacy sendEmail method', () => {
    it('should send basic email successfully', async () => {
      const mockSend = jest.fn().mockResolvedValue({
        data: { id: 'legacy-message-id' }
      });
      
      const { Resend } = require('resend');
      Resend.mockImplementation(() => ({
        emails: { send: mockSend }
      }));

      const result = await emailService.sendEmail(['test@example.com'], 'Test Subject', 'Test message');

      expect(result.success).toBe(true);
      expect(result.messageId).toBe('legacy-message-id');
      expect(mockSend).toHaveBeenCalledWith({
        from: 'noreply@theenergyplanet.com.au',
        to: ['test@example.com'],
        subject: 'Test Subject',
        text: 'Test message'
      });
    });
  });
});