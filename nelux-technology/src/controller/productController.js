const ProductModel = require('../models/product.models');

// Controlador para obtener un producto por ID
const getProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const document = await ProductModel.findOne({ 'Products.id': id });

        if (!document) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const product = document.Products.find(product => product.id === id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controlador para actualizar un producto
const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const document = await ProductModel.findOne({ 'Products.id': id });

        if (!document) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const productIndex = document.Products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        document.Products[productIndex] = { ...document.Products[productIndex], ...updateData };

        await document.save();

        res.json({ message: 'Product updated successfully', product: document.Products[productIndex] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const documents = await ProductModel.find();
        const products = documents.flatMap(doc => doc.Products);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error });
    }
};

// Controlador para crear un producto
const createProductController = async (req, res) => {
    try {
        const newProduct = req.body;

        const document = await ProductModel.findOne({});

        if (!document) {
            return res.status(404).json({ message: 'No document found to add product to' });
        }

        const newId = document.Products.length > 0 ? String(Number(document.Products[document.Products.length - 1].id) + 1) : "1";
        newProduct.id = newId;

        document.Products.push(newProduct);

        await document.save();

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controlador para eliminar un producto
const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;

        const document = await ProductModel.findOne({ 'Products.id': id });

        if (!document) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProducts = document.Products.filter(product => product.id !== id);

        if (updatedProducts.length === document.Products.length) {
            return res.status(404).json({ message: 'Product not found' });
        }

        document.Products = updatedProducts;
        await document.save();

        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controlador para actualizar stock
const updateStockController = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const document = await ProductModel.findOne({ 'Products.id': id });

        if (!document) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const productIndex = document.Products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        document.Products[productIndex].quantity += quantity;
        await document.save();

        res.json({ message: 'Stock updated successfully', product: document.Products[productIndex] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Controlador para devolver stock
const returnStockController = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const document = await ProductModel.findOne({ 'Products.id': id });

        if (!document) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const productIndex = document.Products.findIndex(product => product.id === id);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Product not found' });
        }

        document.Products[productIndex].quantity += quantity;
        await document.save();

        res.json({ message: 'Stock returned successfully', product: document.Products[productIndex] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    getProductController,
    updateProductController,
    getAllProducts,
    createProductController,
    deleteProductController,
    updateStockController,
    returnStockController
};
