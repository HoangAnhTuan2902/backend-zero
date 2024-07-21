const express = require('express');
const {
	getHomePage,
	hello,
	mrTuan,
	postCreateUser,
	getCreatePage,
	getUdatePage,
} = require('../controllers/homeController');
const router = express.Router();

//khai báo route
router.get('/', getHomePage);
router.get('/mrtuan', mrTuan);
router.get('/hello', hello);

router.get('/create', getCreatePage);

router.get('/update', getUdatePage);

router.post('/create-user', postCreateUser);

module.exports = router;
