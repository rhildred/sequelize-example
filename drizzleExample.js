import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
 
const sqlite = new Database('test.sqlite');
const db = drizzle(sqlite);
 
const result = db.select().from(users).all();

console.log(JSON.stringify(result));