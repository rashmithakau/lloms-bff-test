const priceService = require('../../services/product-service/priceService');

const updatePrice = async (req, res) => {
    try{
        const dataObj = req.body;
        const response = await priceService.updatePrice(dataObj);
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({message:error.message});
    }

}

module.exports = {updatePrice}