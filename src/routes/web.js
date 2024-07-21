const express = require('express');
const {
	getHomePage,
	hello,
	mrTuan,
	postCreateUser,
	getCreatePage,
	getUdatePage,
	postUpdateUser,
} = require('../controllers/homeController');
const router = express.Router();

//khai báo route
router.get('/', getHomePage);
router.get('/mrtuan', mrTuan);
router.get('/hello', hello);

router.get('/create', getCreatePage);

router.get('/update/:id', getUdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;
