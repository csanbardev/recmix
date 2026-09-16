import fs from 'node:fs'
import { createPool } from "mysql2/promise";

import{
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_SSL,
  DB_SSL_CA
} from './config.js'

const sslConfig = DB_SSL
  ? (DB_SSL_CA ? { ca: fs.readFileSync(DB_SSL_CA), rejectUnauthorized: false } : { rejectUnauthorized: false })
  : false

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  ssl: sslConfig
})