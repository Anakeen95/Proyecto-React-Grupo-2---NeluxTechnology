// middleware.js
const express = require('express');
const app = express();

// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
};

// Middleware para validar datos
const validateProductData = (req, res, next) => {
  const { name, price, quantity } = req.body;
  if (!name || !price || !quantity) {
    return res.status(400).send('Faltan datos necesarios');
  }
  next();
};

module.exports = { errorHandler, validateProductData };
