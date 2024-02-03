const express = require('express');

const router = express.Router();
const { getProducts, getProductById } = require('../services/productService');
const { errorFormatter } = require('../utils/errorFormatter');

router.get('/', async (req, res) => {
  try {
    const products = await getProducts(req.query);
    return res.status(200).json({ result: products });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const products = await getProductById(req.params.id);
    return res.status(200).json({ result: products });
  } catch (e) {
    const { status, message } = errorFormatter(e);
    return res.status(status).json({ message });
  }
});

module.exports = router;
