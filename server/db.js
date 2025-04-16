const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const pool = new Pool({
    user: process.env.DB_USER, // Use environment variable
    host: process.env.DB_HOST, // Use environment variable
    database: process.env.DB_NAME, // Use environment variable
    password: process.env.DB_PASSWORD, // Use environment variable
    port: process.env.DB_PORT, // Use environment variable
});


// CREATE TABLE form( 
//     ID SERIAL PRIMARY KEY,
//     full_name varchar(50),
//     email varchar(50) UNIQUE,
//     age int,
//     gender varchar(10),
//    marital_status varchar(10),
//     nationality varchar(50),
//     address varchar(100)
// );
module.exports = pool;