import mongoose, { Schema, Document } from 'mongoose';

interface IQuote extends Document {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  interests: [string];
  dailyEnergyConsumption: string;
}

const QuoteSchema = new Schema<IQuote>(
  {
    fullName: { 
      type: String, 
      required: [true, 'Full name is required'], 
      trim: true, 
      minlength: [3, 'Full name must be at least 3 characters long'], 
      maxlength: [50, 'Full name cannot exceed 50 characters']
    },

    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
      lowercase: true, 
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },

    phone: { 
      type: String, 
      required: [true, 'Phone number is required'], 
      trim: true, 
      match: [/^\d{10,15}$/, 'Phone number must be between 10 to 15 digits']
    },

    address: { 
      type: String, 
      required: [true, 'Address is required'], 
      trim: true, 
      minlength: [5, 'Address must be at least 5 characters long'], 
      maxlength: [100, 'Address cannot exceed 100 characters']
    },

    suburb: { 
      type: String, 
      required: [true, 'Suburb is required'], 
      trim: true 
    },

    interests: {
      type: [String],
      required: [true, 'At least one interest is required'],
      enum: {
        values: [
          'Commercial Solar',
          'Residential Solar',
          'Battery Storage',
          'Reclaim Heatpump',
          'Split System Air Conditioning',
          'EV Car Charging',
          'AquaTherm Pool'
        ],
        message: 'Invalid interest selected'
      }
    },

    dailyEnergyConsumption: { 
      type: String, 
      required: [true, 'Daily energy consumption is required'], 
      trim: true, 
      match: [/^\d+(\.\d+)?\s?kWh$/, 'Daily energy consumption must be a valid number followed by "kWh"']
    }
  },
  { timestamps: true }
);

export default mongoose.model<IQuote>('Quote', QuoteSchema);
