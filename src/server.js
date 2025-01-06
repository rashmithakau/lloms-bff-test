const app = require('./app');
const { port } = require('./config');

app.listen(port, () => {
    console.log(`BFF is running on http://localhost:${port}`);
});
