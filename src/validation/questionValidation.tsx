import { z } from "zod";

export const questionSchema = z.object({
  title: z.string().min(20).max(100),
  description: z.string().min(100),
  questionTags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
