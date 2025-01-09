import { z } from "zod";

export const addArticleSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type InferAddArticleSchema = z.infer<typeof addArticleSchema>;
