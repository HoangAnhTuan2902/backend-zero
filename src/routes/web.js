const express = require('express');
const { getHomePage, hello, mrTuan } = require('../controllers/homeController');
const router = express.Router();

//khai báo route
router.get('/', getHomePage);
router.get('/mrtuan', mrTuan);
router.get('/hello', hello);

module.exports = router;
