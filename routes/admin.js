const path = require('path');

const express = require('express');


const productsController = require('../controllers/products')  //../ means as becuase we are in admin file , we have to go up one level, to reach level of all files,then to controllers folder

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct); // dont put(), as we are not executing this function just passing a ref, so as whenever it comes to /add-product, this is the function it has to execute.

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProduct );

module.exports= router;

