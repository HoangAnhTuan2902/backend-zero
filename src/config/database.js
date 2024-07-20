require('dotenv').config();

// Get the client
const mysql = require('mysql2');

// Create the connection to database
// const connection = mysql.createConnection({
// 	host: process.env.DB_HOST || 'localhost',
// 	port: process.env.DB_PORT,
// 	password: process.env.DB_PASSWORD,
// 	user: process.env.DB_USER,
// 	database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	password: process.env.DB_PASSWORD,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = connection;
