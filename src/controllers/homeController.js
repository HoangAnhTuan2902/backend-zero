const getHomePage = (req, res) => {
	res.send('Hello World! with nodemon');
};

const hello = (req, res) => {
	res.send('Hello mr tuấn');
};

const mrTuan = (req, res) => {
	res.render('sample.ejs');
};

module.exports = { getHomePage, hello, mrTuan };
