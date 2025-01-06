const express = require('express');
const {updatePrice} =require('../controllers/product-service/priceController');
const {authenticate} = require('../middlewares/authMiddleware');

const router = express.Router();

router.put('',authenticate,updatePrice);

module.exports = router;