import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL is not set in the environment variables.");
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle.config.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string
  }
});
