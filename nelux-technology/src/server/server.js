// server.js
const express = require('express');
const connectDB = require('../app');
const cors = require('cors');
const productRoutes = require('../routes/productRoutes'); // Asegúrate de que la ruta sea correcta
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para manejar JSON
app.use(express.json());

// Middleware de registro de solicitudes
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url} statusCode response ${res.statusCode}`);
    next(); // continuar con el siguiente middleware
});

// Configura CORS
app.use(cors({
    origin: 'http://localhost:3001', // 
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
}));

// Rutas
app.use('/api/products', productRoutes); // Define la ruta base para los productos
app.use(express.urlencoded({ extended: true }));

// Escucha en el puerto definido
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
