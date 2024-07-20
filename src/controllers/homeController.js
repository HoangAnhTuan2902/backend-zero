const getHomePage = (req, res) => {
	return res.render('home.ejs');
};

const hello = (req, res) => {
	res.send('Hello mr tuấn');
};

const mrTuan = (req, res) => {
	res.render('sample.ejs');
};

module.exports = { getHomePage, hello, mrTuan };
