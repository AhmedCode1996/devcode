import { Schema, models, model, Document } from "mongoose";

export interface userSchemaTypes extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  role?: string;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;

  bio?: string;
  password?: string;
  avatar?: string;
  location?: string;
  personalWebsite?: string;
  reputation?: number;
}

const userSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
  bio: { type: String },
  password: { type: String },
  avatar: { type: String },
  location: { type: String },
  personalWebsite: { type: String },
  reputation: { type: Number, default: 0 },
});
export const User = models.User || model("User", userSchema);
