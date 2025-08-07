/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import { submitQuote } from '../Controller/controller';

const QuoteRouter = express.Router();

// Submit quote request via email
QuoteRouter.post('/', submitQuote);

export default QuoteRouter;
