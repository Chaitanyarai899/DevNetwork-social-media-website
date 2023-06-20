import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

if (db) {
  console.log("Database Connected ❣️")
}
else{
  console.log("couldn't connect db, please check your connection")
}
