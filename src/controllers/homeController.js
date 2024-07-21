const {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUserById,
} = require('../services/CRUDService.js');
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

	let [results, fields] = await connection.query(
		'INSERT INTO Users (email, name, city) values (?,?,?)',
		[email, name, city],
	);
	res.send('Create user success');
};

const postUpdateUser = async (req, res) => {
	let { email, name, city, id } = req.body;
	await updateUser(email, name, city, id);
	// res.send('Update user success');
	res.redirect('/');
};

const getUdatePage = async (req, res) => {
	const userId = req.params.id;
	const results = await getUserById(userId);
	res.render('edit.ejs', { user: results });
};

const getCreatePage = (req, res) => {
	res.render('create.ejs');
};

const postDeleteUser = async (req, res) => {
	const userId = req.params.id;
	const results = await getUserById(userId);
	res.render('delete.ejs', { user: results });
};

const postHandleRemoveUser = async (req, res) => {
	let { id } = req.body;
	await deleteUserById(id);
	res.redirect('/');
};

module.exports = {
	getHomePage,
	hello,
	mrTuan,
	postCreateUser,
	getCreatePage,
	getUdatePage,
	postUpdateUser,
	postDeleteUser,
	postHandleRemoveUser,
};
