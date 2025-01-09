const app = require('./app');
const { port, userUrl } = require('./config');

app.listen(port, () => {
    console.log(`BFF is running on http://localhost:${port} USER_SERVICE_BASE_URL: ${userUrl} PRODUCT_SERVICE_BASE_URL: ${process.env.PRODUCT_SERVICE_BASE_URL}`);
});
