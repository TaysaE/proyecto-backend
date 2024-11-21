const express = require('express');
const { cart, cats, cats_products, products, products_comments, sell, user_cart } = require('./emercado-api');

const router = express.Router();

// Rutas para productos
router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

// Rutas para categorías
router.get('/cats', (req, res) => {
    res.json(cats);
});

router.get('/cats/:id/products', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryProducts = cats_products.find(cat => cat.categoryId === categoryId);

    if (categoryProducts) {
        const relatedProducts = products.filter(p => categoryProducts.products.includes(p.id));
        res.json(relatedProducts);
    } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
    }
});

// Rutas para comentarios de productos
router.get('/products/:id/comments', (req, res) => {
    const productId = parseInt(req.params.id);
    const productComments = products_comments.find(c => c.productId === productId);

    if (productComments) {
        res.json(productComments.comments);
    } else {
        res.status(404).json({ message: 'Comentarios no encontrados para este producto' });
    }
});

// Rutas para el carrito
router.get('/cart', (req, res) => {
    res.json(cart);
});

router.get('/cart/:id', (req, res) => {
    const cartId = parseInt(req.params.id);
    const cartItem = cart.find(c => c.id === cartId);

    if (cartItem) {
        res.json(cartItem);
    } else {
        res.status(404).json({ message: 'Carrito no encontrado' });
    }
});

// Rutas para usuarios y sus carritos
router.get('/user_cart', (req, res) => {
    res.json(user_cart);
});

router.get('/user_cart/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userCart = user_cart.find(uc => uc.userId === userId);

    if (userCart) {
        res.json(userCart);
    } else {
        res.status(404).json({ message: 'Carrito del usuario no encontrado' });
    }
});

// Rutas para ventas
router.get('/sell', (req, res) => {
    res.json(sell);
});

router.get('/sell/:id', (req, res) => {
    const sellId = parseInt(req.params.id);
    const sellItem = sell.find(s => s.id === sellId);

    if (sellItem) {
        res.json(sellItem);
    } else {
        res.status(404).json({ message: 'Venta no encontrada' });
    }
});

module.exports = router;


