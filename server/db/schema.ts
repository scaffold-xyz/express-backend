import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { z } from "zod";
export const articlesTable = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  category: text("category").notNull(),
  subcategory: text("subcategory").notNull(),
  tags: text("tags").array(),
});

export const articleInsertSchema = createInsertSchema(articlesTable);
export const articleSelectSchema = createSelectSchema(articlesTable);
export const articleUpdateSchema = createUpdateSchema(articlesTable);

export type ArticleInsertSchema = z.infer<typeof articleInsertSchema>;
export type ArticleSelectSchema = z.infer<typeof articleSelectSchema>;
export type ArticleUpdateSchema = z.infer<typeof articleUpdateSchema>;
