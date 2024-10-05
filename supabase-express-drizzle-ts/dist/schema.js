"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yourTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.yourTable = (0, pg_core_1.pgTable)('your_table', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
