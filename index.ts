import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { users } from "./schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);
await db
  .insert(users)
  .values({ id: "1", textModifiers: "hello", intModifiers: true });
const result = await db.select().from(users);

console.log(result);
