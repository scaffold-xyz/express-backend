// add article to database
// use zod to validate the article
// use drizzle to add the article to the database
import type { ArticleInsertSchema } from "../../db/zodSchemaAndTypes";
import { createArticle } from "../../db/queries/articles";

export const addArticle = async (
  article: ArticleInsertSchema
): Promise<{
  data: ArticleInsertSchema | null;
  message: string;
  error: any;
}> => {
  try {
    // Create article in database
    await createArticle({
      ...article,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      data: article,
      message: "Article successfully added",
      error: null,
    };
  } catch (error) {
    console.error("Error adding article:", error);
    return {
      data: null,
      message: "Failed to add article",
      error: error,
    };
  }
};

export default addArticle;
