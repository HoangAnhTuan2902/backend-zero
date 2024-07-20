const connection = require('../config/database.js');

const getAllUsers = async () => {
	let [results, fields] = await connection.query('SELECT * FROM Users');
	return results;
};
module.exports = {
	getAllUsers,
};
