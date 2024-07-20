const connection = require('../config/database.js');

const getHomePage = (req, res) => {
	return res.render('home.ejs');
};

const hello = (req, res) => {
	res.send('Hello mr tuấn');
};

const mrTuan = (req, res) => {
	res.render('sample.ejs');
};

const postCreateUser = (req, res) => {
	let { email, name, city } = req.body;

	connection.query(
		'INSERT INTO Users (email, name, city) values (?,?,?)',
		[email, name, city],
		function (err, results) {
			if (err) {
				console.log(err);
				res.send('Create user failed');
				return;
			}
			console.log(results);
			res.send('Create user success');
		},
	);

	console.log('email:', email, 'name:', name, 'city:', city);
};
module.exports = { getHomePage, hello, mrTuan, postCreateUser };
