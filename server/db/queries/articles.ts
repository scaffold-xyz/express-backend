import { db } from "../index";
import {
  articlesTable,
  ArticleInsertSchema,
  ArticleUpdateSchema,
} from "../schema";
import { eq } from "drizzle-orm";

export async function getAllArticles() {
  return await db.select().from(articlesTable);
}

export async function getArticleById(id: number) {
  return await db.select().from(articlesTable).where(eq(articlesTable.id, id));
}

export async function createArticle(article: ArticleInsertSchema) {
  return await db.insert(articlesTable).values(article);
}

export async function updateArticle(id: number, article: ArticleUpdateSchema) {
  return await db
    .update(articlesTable)
    .set(article)
    .where(eq(articlesTable.id, id));
}

export async function deleteArticle(id: number) {
  return await db.delete(articlesTable).where(eq(articlesTable.id, id));
}
