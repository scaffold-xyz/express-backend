import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { config } from 'dotenv';

config();

// Database connection
const connectionString = process.env.DATABASE_URL!;
// For connection pooling in production:
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client); 