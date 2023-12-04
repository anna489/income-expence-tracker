const { sql } = require("../config/pgDb");

const createTables = async () => {
  console.log("CREATING TABLE...");

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

  await sql`
    CREATE TABLE IF NOT EXISTS users(
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password TEXT NOT NULL,
    avatarImg TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
 `;
  console.log("CREATED TABLE.");
};

const createCategory = async () => {
  console.log("CREATING TABLE...");

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

  await sql`
    CREATE TABLE IF NOT EXISTS category (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    color TEXT NOT NULL,
    avatarImg TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
 `;
  console.log("CREATED TABLE.");
};

// const createEnumType = async () => {
//   console.log("CREATING TABLE...");
//   await sql` CREATE TYPE enumType AS ENUM( 'INC', 'EXP')`;
//   console.log("CREATED TABLE.");
// };

const createTransaction = async () => {
  console.log("CREATING TABLE...");

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

  await sql`
  CREATE TABLE IF NOT EXISTS transaction  (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid  REFERENCES users(id), 
    FOREIGN KEY (user_id) REFERENCES users(id),
    name VARCHAR(50) NOT NULL,
    amount REAL NOT NULL,
    transaction_type enumType,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id uuid DEFAULT uuid_generate_v4(),
    FOREIGN KEY(category_id) REFERENCES category(id))
    ;
 `;
  console.log("CREATED TABLE.");
};

createTables();
createCategory();
createTransaction();
// createEnumType();

const insertData = async () => {
  console.log("");
};

insertData();
