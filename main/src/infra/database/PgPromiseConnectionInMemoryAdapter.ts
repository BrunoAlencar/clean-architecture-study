import { newDb } from 'pg-mem';
import fs from 'fs';
import Connection from './Connection';

export default class PgPromiseConnectionInMemoryAdapter implements Connection {
  pgp: any;

  // constructor() {}

  async start() {
    this.pgp = await newDb().adapters.createPgPromise();
    await this.pgp.query(fs.readFileSync('./database.sql', 'utf8'));
    // await this.pgp.connection();
  }

  async query(statement: string, params: any): Promise<any> {
    await this.start();
    return this.pgp.query(statement, params);
  }

  async close(): Promise<void> {
    await this.start();
    return this.pgp.$pool.end();
  }
}
