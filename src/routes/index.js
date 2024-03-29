const express = require('express');

const router = express.Router();
const productRouter = require('./productRoutes');
const authRouter = require('./authRoutes');
const wishListRouter = require('./wishListRoutes');
const cartRouter = require('./cartRoutes');
const addressRouter = require('./addressRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/wishlist', wishListRouter);
router.use('/cart', cartRouter);
router.use('/address', addressRouter);
router.use('/order', orderRoutes);
module.exports = router;
