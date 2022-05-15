import fs from 'fs';
import { newDb } from 'pg-mem';

export default async function globalSetup() {
  // const db = newDb();
  // // create schema
  // db.public.none(fs.readFileSync('./database.sql', 'utf8'));
  // // then, create a backup (insert data that will be common to all tests before that if required)
  // const backup = db.backup();
  // // restore 'db' as original
  // backup.restore();
  // => use 'db' !
}
