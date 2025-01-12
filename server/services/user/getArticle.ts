import { getAllArticles } from "../../db/queries/articles";
import type { ArticleSelectSchema } from "../../db/zodSchemaAndTypes";

export const getArticle = async (): Promise<{
  data: ArticleSelectSchema[] | null;
  message: string;
  error: any;
}> => {
  try {
    const articles = await getAllArticles();

    return {
      data: articles,
      message: "Articles fetched successfully",
      error: null,
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      data: null,
      message: "Failed to fetch articles",
      error: error,
    };
  }
};

export default getArticle;
