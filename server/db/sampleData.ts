import { ArticleInsertSchema } from "./schema";

export const sampleArticles: ArticleInsertSchema[] = [
  {
    title: "The Future of AI in 2024",
    content: "Artificial Intelligence ka future bohot bright hai. Machine learning aur deep learning ke advances...",
    author: "Rahul Kumar",
    imageUrl: "https://example.com/images/ai-future.jpg",
    category: "Technology",
    subcategory: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Technology"],
  },
  {
    title: "Best Street Food in Delhi",
    content: "Delhi ki galiyon mein milne wale incredible street food ke bare mein ek detailed guide...",
    author: "Priya Singh",
    imageUrl: "https://example.com/images/delhi-food.jpg",
    category: "Food",
    subcategory: "Street Food",
    tags: ["Food", "Delhi", "Street Food"],
  },
  {
    title: "Cryptocurrency Investment Guide",
    content: "Bitcoin aur Ethereum jaise cryptocurrencies mein invest karne ka complete guide...",
    author: "Amit Sharma",
    imageUrl: "https://example.com/images/crypto.jpg",
    category: "Finance",
    subcategory: "Cryptocurrency",
    tags: ["Crypto", "Investment", "Bitcoin"],
  }
]; 