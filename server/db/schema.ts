import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const articlesTable = pgTable('articles', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  author: text('author').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  category: text('category').notNull(),
  subcategory: text('subcategory').notNull(),
  tags: text('tags').array(),
});

// Types for TypeScript
export type Article = typeof articlesTable.$inferSelect;
export type NewArticle = typeof articlesTable.$inferInsert; 