const { getAllUsers } = require('../services/CRUDService.js');
const connection = require('../config/database.js');

const getHomePage = async (req, res) => {
	let results = await getAllUsers();
	return res.render('home.ejs', { listUsers: results });
};

const hello = (req, res) => {
	res.send('Hello mr tuấn');
};

const mrTuan = (req, res) => {
	res.render('sample.ejs');
};

const postCreateUser = async (req, res) => {
	let { email, name, city } = req.body;

	let [result, fields] = await connection.query(
		'INSERT INTO Users (email, name, city) values (?,?,?)',
		[email, name, city],
	);
	res.send('Create user success');
};

const getCreatePage = (req, res) => {
	res.render('create.ejs');
};

module.exports = { getHomePage, hello, mrTuan, postCreateUser, getCreatePage };
