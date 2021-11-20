import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import Logger from './logger';

dotenv.config();

const { DB_NAME, DB_HOST, DB_PORT } = process.env;

const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const db = new MongoClient(dbUrl);

db.connect(async (err) => {
  if (err) throw err;
  console.log('Connected to database');
  Logger.info('Connected to database');
});

export default db.db(DB_NAME);
