const jwt = require('jsonwebtoken');
const {jwtExpiration,jwtSecret} = require('../config');

const generateToken = (payload) => {
    return jwt.sign(payload, 'default_secret_key',  { expiresIn: jwtExpiration });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

module.exports = { generateToken, verifyToken };
