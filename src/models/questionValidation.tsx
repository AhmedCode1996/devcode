import { z } from "zod";

export const questionSchema = z.object({
  title: z.string().min(20).max(100),
  description: z.string().min(100),
  questionTags: z.string().max(15),
});

export type QuestionSchemaTypes = z.infer<typeof questionSchema>;
