var express = require('express');
var router = express.Router();
var prodListing = require('../public/data/products/index.get.json');
var prodCategories = require('../public/data/categories/index.get.json');
var totalCounter = require('./constant');

/* GET product listing. */
router.get('/', function(req, res, next){    
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', {products:prodListing,categories:ActiveCategories,totalCounter:totalCounter.total_item_count});
})

/* GET category listing. */
router.get('/:id', function(req, res, next){
    var CatId = req.params.id;
    CategoryProducts = prodListing.filter(product => product.category==CatId);
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', {products:CategoryProducts,categories:ActiveCategories,totalCounter:totalCounter.total_item_count});
})

module.exports = router;