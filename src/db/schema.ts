import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL is not set in the environment variables.");
}

const db = drizzle(process.env.DATABASE_URL as string);

export default db;
