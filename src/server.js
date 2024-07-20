require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
// Get the client
const mysql = require('mysql2');

const app = express(); // create an express app
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME || 'localhost'; // hostname

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

// Create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3307,
	password: '123456',
	user: 'root',
	database: 'tuan',
});

// A simple SELECT query
// connection.query('SELECT * FROM Users u', function (err, results, fields) {
// 	console.log('results', results);
// });

app.listen(port, hostname, () => {
	console.log(`Example app listening on port ${port}`);
});
