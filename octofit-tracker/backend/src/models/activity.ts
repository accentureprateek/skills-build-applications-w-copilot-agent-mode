import mongoose, { Document } from 'mongoose';

export interface ActivityDocument extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  calories?: number;
  date: Date;
}

const ActivitySchema = new mongoose.Schema<ActivityDocument>(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

const Activity = mongoose.model<ActivityDocument>('Activity', ActivitySchema);
export default Activity;
