import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const yourTable = pgTable('your_table', {
  id: serial('id').primaryKey(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
});
