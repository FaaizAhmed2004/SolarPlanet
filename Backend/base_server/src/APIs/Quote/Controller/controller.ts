/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import Quote from '../Model/model'; // Adjust path if necessary

// ✅ Create a new quote
export const createQuote = async (req: Request, res: Response) => {
  try {
    // Validate interests before saving
    const validInterests = [
      'Commercial Solar',
      'Residential Solar',
      'Battery Storage',
      'Radiant Heating',
      'Split System',
      'EV Charging',
      'Pool Heat Pump'
    ];

    // Ensure `interests` exists and is an array
    if (!Array.isArray(req.body.interests)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Interests must be an array of valid options.' 
      });
    }

    // Filter only valid interests
    const filteredInterests = req.body.interests.filter((interest: string) =>
      validInterests.includes(interest)
    );

    if (filteredInterests.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid interest selected. Please select a valid option.'
      });
    }

    // Update request body with validated interests
    req.body.interests = filteredInterests;

    const newQuote = await Quote.create(req.body);
    return res.status(201).json({ success: true, quote: newQuote }); // ✅ Ensure return statement
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ success: false, message: error.message }); // ✅ Ensure return statement
    }

    return res.status(400).json({ success: false, message: 'An unknown error occurred' }); // ✅ Ensure return statement
  }
};


// ✅ Get all quotes
export const getAllQuotes = async (_req: Request, res: Response) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json({ success: true, quotes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// ✅ Get a single quote by ID
export const getQuoteById = async (req: Request, res: Response) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ success: false, message: 'Quote not found' });
    }

    return res.status(200).json({ success: true, quote }); // Added return statement
  } catch (error: unknown) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// ✅ Update a quote by ID
export const updateQuote = async (req: Request, res: Response) => {
  try {
    const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!quote) {
      return res.status(404).json({ success: false, message: 'Quote not found' });
    }

    return res.status(200).json({ success: true, quote });
  } catch (error: unknown) {
    return res.status(400).json({ success: false, message: 'Invalid request' });
  }
};

// ✅ Delete a quote by ID
 
export const deleteQuote = async (req: Request, res: Response) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    if (!quote) {
      return res.status(404).json({ success: false, message: 'Quote not found' });
    }

    return res.status(200).json({ success: true, message: 'Quote deleted successfully' });
  } catch (error: unknown) {
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};