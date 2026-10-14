import { pgTable, uuid, text, char, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  timeZone: text("time_zone").notNull().default("Asia/Kolkata"),
  currency: char("currency", { length: 3 }).notNull().default("INR"),
  plan: text("plan").notNull().default("free"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});