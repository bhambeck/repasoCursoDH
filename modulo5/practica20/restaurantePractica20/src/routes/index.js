var express = require('express');
var router = express.Router();
const ProductController= require('../controllers/productController')

/* GET home page. */
router.get('/',ProductController.mostrar);

module.exports = router;
