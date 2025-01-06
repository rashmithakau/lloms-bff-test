const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/auth', authRoutes); //user-service

//app.use('/api/v1/product',productRoutes);          //product-service
app.use('/api/v1/price',productRoutes);              //product-service
//app.use('/api/v1/stock',productRoutes);            //product-service

app.use(errorHandler);

module.exports = app;


