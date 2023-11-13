import { Schema, models, model, Document } from "mongoose";

export interface QuestionSchemaTypes extends Document {
  title: string;
  description: string;
  views: number;
  createdAt: Date;
  // reference from other tags from the table
  questionTags: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  upVotes: Schema.Types.ObjectId[];
  downVotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
}

const questionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  views: { type: Number, default: 0 },
  questionTags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  upVotes: { type: Schema.Types.ObjectId, ref: "User" },
  downVotes: { type: Schema.Types.ObjectId, ref: "User" },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});

export const Question = models.Question || model("Question", questionSchema);
