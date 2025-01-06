const axios = require('axios');
const {productUrl}= require('../../config')

const updatePrice = async (dataObj) => {
    try{
        const response = await axios.put(`${productUrl}/api/v1/price`,dataObj);
        return response.data;
    }catch(error){
        console.error('Error updating price:', error.message);
        throw new Error('Failed to update  price');
    }
};



module.exports = {updatePrice};

