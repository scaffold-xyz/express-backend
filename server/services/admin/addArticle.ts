// add article to database
// use zod to validate the article
// use drizzle to add the article to the database
import type { InferAddArticleSchema } from "../../zod/addArticle";

export const addArticle = async (
  article: InferAddArticleSchema
): Promise<{
  data: InferAddArticleSchema | null;
  message: string;
  error: any;
}> => {
  console.log("addArticle", article);
  return { data: null, message: "Article added", error: "" };
};

export default addArticle;
