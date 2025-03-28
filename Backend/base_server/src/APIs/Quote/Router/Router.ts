/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { 
  createQuote, 
  getAllQuotes, 
  getQuoteById, 
  updateQuote, 
  deleteQuote 
} from '../Controller/controller'; // Adjust path if necessary

const Feedbackrouter = express.Router();

Feedbackrouter.post('/', createQuote); // Create a new quote
Feedbackrouter.get('/', getAllQuotes); // Get all quotes
Feedbackrouter.get('/:id', getQuoteById); // Get a quote by ID
Feedbackrouter.put('/:id', updateQuote); // Update a quote by ID
Feedbackrouter.delete('/:id', deleteQuote); // Delete a quote by ID

export default Feedbackrouter;
