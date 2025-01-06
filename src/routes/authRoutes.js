const express = require('express');
const { login } = require('../controllers/authController'); // Import login correctly

const router = express.Router();

router.post('/login', login); // Use login as the callback function

module.exports = router;
