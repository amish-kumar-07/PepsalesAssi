import { integer, pgTable, varchar, timestamp, serial } from "drizzle-orm/pg-core";

export const notificationsTable = pgTable("notifications", {
  id: serial("id").primaryKey(), // changed from integer to serial
  userId: integer("user_id").notNull(), // new column for user reference
  type: varchar("type", { length: 255 }).notNull(),
  message: varchar("message", { length: 255 }).notNull(),
  receiver : varchar("receiver", { length: 255 }).notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});
