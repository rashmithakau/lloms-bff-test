require('dotenv').config();

const config = {
    productUrl: process.env.PRODUCT_SERVICE_BASE_URL,
    userUrl: process.env.USER_SERVICE_BASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    port: process.env.PORT
};

module.exports = config;
