const express = require('express');
const {
	getHomePage,
	hello,
	mrTuan,
	postCreateUser,
	getCreatePage,
} = require('../controllers/homeController');
const router = express.Router();

//khai báo route
router.get('/', getHomePage);
router.get('/mrtuan', mrTuan);
router.get('/hello', hello);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
