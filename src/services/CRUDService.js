const connection = require('../config/database.js');
const { use } = require('../routes/web.js');

const getAllUsers = async () => {
	let [results, fields] = await connection.query('SELECT * FROM Users');
	return results;
};

const getUserById = async (userId) => {
	let [results, fields] = await connection.query(`SELECT * FROM Users u WHERE id = ?`, [userId]);
	let user = results && results.length > 0 ? results[0] : {};
	return user;
};
const updateUser = async (email, name, city, id) => {
	let [results, fields] = await connection.query(
		`
		UPDATE Users 
		SET email = ?, name = ?, city = ?
		WHERE id = ?
		`,
		[email, name, city, id],
	);
};
module.exports = {
	getAllUsers,
	getUserById,
	updateUser,
};
