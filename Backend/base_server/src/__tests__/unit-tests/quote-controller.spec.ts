import request from 'supertest';
import express from 'express';
import { submitQuote } from '../../APIs/Quote/Controller/controller';

// Mock the email service
jest.mock('../../services/email', () => ({
  default: {
    sendQuoteRequest: jest.fn(),
    sendConfirmationEmail: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.post('/quote', submitQuote);

describe('Quote Controller Integration Tests', () => {
  const validQuoteData = {
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

  describe('POST /quote', () => {
    it('should successfully submit quote when all data is valid', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockResolvedValue({ success: true, messageId: 'test-id' });
      emailService.sendConfirmationEmail.mockResolvedValue({ success: true, messageId: 'confirm-id' });

      const response = await request(app)
        .post('/quote')
        .send(validQuoteData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('successfully');
      expect(response.body.emailSent).toBe(true);
      expect(emailService.sendQuoteRequest).toHaveBeenCalledWith(validQuoteData);
      expect(emailService.sendConfirmationEmail).toHaveBeenCalledWith('john@example.com', 'John Doe');
    });

    it('should return 400 when full name is missing', async () => {
      const invalidData = { ...validQuoteData, fullName: '' };

      const response = await request(app)
        .post('/quote')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.errors).toContain('Full name is required');
    });

    it('should return 400 when email is invalid', async () => {
      const invalidData = { ...validQuoteData, email: 'invalid-email' };

      const response = await request(app)
        .post('/quote')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.errors).toContain('Valid email address is required');
    });

    it('should return 400 when no interests are selected', async () => {
      const invalidData = { ...validQuoteData, interests: [] };

      const response = await request(app)
        .post('/quote')
        .send(invalidData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.errors).toContain('At least one valid interest must be selected');
    });

    it('should filter out invalid interests', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockResolvedValue({ success: true, messageId: 'test-id' });
      emailService.sendConfirmationEmail.mockResolvedValue({ success: true, messageId: 'confirm-id' });

      const dataWithInvalidInterests = {
        ...validQuoteData,
        interests: ['Residential Solar', 'Invalid Interest', 'Battery Storage']
      };

      const response = await request(app)
        .post('/quote')
        .send(dataWithInvalidInterests)
        .expect(200);

      expect(response.body.success).toBe(true);
      
      // Check that only valid interests were passed to email service
      const emailCall = emailService.sendQuoteRequest.mock.calls[0][0];
      expect(emailCall.interests).toEqual(['Residential Solar', 'Battery Storage']);
      expect(emailCall.interests).not.toContain('Invalid Interest');
    });

    it('should return 500 when business email fails', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockResolvedValue({ 
        success: false, 
        error: 'Email service unavailable' 
      });

      const response = await request(app)
        .post('/quote')
        .send(validQuoteData)
        .expect(500);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('Failed to submit quote request');
      expect(response.body.retryable).toBe(true);
    });

    it('should succeed even if confirmation email fails', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockResolvedValue({ success: true, messageId: 'test-id' });
      emailService.sendConfirmationEmail.mockResolvedValue({ 
        success: false, 
        error: 'Confirmation email failed' 
      });

      const response = await request(app)
        .post('/quote')
        .send(validQuoteData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.emailSent).toBe(true);
    });

    it('should trim whitespace from all string fields', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockResolvedValue({ success: true, messageId: 'test-id' });
      emailService.sendConfirmationEmail.mockResolvedValue({ success: true, messageId: 'confirm-id' });

      const dataWithWhitespace = {
        fullName: '  John Doe  ',
        email: '  JOHN@EXAMPLE.COM  ',
        phone: '  0412345678  ',
        address: '  123 Test Street  ',
        suburb: '  Melbourne  ',
        interests: ['Residential Solar'],
        dailyEnergyConsumption: '  15kWh per day  '
      };

      await request(app)
        .post('/quote')
        .send(dataWithWhitespace)
        .expect(200);

      const emailCall = emailService.sendQuoteRequest.mock.calls[0][0];
      expect(emailCall.fullName).toBe('John Doe');
      expect(emailCall.email).toBe('john@example.com');
      expect(emailCall.phone).toBe('0412345678');
      expect(emailCall.address).toBe('123 Test Street');
      expect(emailCall.suburb).toBe('Melbourne');
      expect(emailCall.dailyEnergyConsumption).toBe('15kWh per day');
    });

    it('should handle unexpected errors gracefully', async () => {
      const emailService = require('../../services/email').default;
      emailService.sendQuoteRequest.mockRejectedValue(new Error('Unexpected error'));

      const response = await request(app)
        .post('/quote')
        .send(validQuoteData)
        .expect(500);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('error occurred while processing');
      expect(response.body.retryable).toBe(true);
    });

    it('should validate all required fields', async () => {
      const incompleteData = {
        fullName: 'John Doe'
        // Missing all other required fields
      };

      const response = await request(app)
        .post('/quote')
        .send(incompleteData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.errors).toContain('Valid email address is required');
      expect(response.body.errors).toContain('Phone number is required');
      expect(response.body.errors).toContain('Address is required');
      expect(response.body.errors).toContain('Suburb is required');
      expect(response.body.errors).toContain('Daily energy consumption is required');
      expect(response.body.errors).toContain('At least one valid interest must be selected');
    });
  });
});