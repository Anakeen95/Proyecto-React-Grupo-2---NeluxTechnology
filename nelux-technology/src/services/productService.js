const ProductModel= require('../models/product.models');

const addProductService = async (req, res) => {
    const product = req.body;

    try {
         const newProduct = new ProductModel(product) 
         
         await newProduct.save()
         return {message: "producto generado con exito", statusCode: 201}

    } catch (error) {
        return {message: "Ocurrio un error", statusCode: 400}
    }

}

module.exports = {
    addProductService
}