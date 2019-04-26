let express = require('express');
let router = express.Router();
let prodListing = require('../public/data/products/index.get.json');
let prodCategories = require('../public/data/categories/index.get.json');
let totalCounter = require('./constant');
let commonContent = require('./strings');

/* GET product listing. */
router.get('/', function(req, res, next){    
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', 
    {
        products:prodListing,
        categories:ActiveCategories,
        totalCounter:totalCounter.total_item_count, 
        footerContent: commonContent.Copyright, 
        buyButton: commonContent.Buy_Button,
        mrpProd: commonContent.MRP,
        menuHome : commonContent.Home_Menu,
        menuProduct : commonContent.Product_Menu,
        menuLogin : commonContent.Login_Menu,
        menuRegister : commonContent.Register_Menu,
        cartItem : commonContent.Cart_Item
    });
})

/* GET category listing. */
router.get('/:id', function(req, res, next){
    let CatId = req.params.id;
    CategoryProducts = prodListing.filter(product => product.category==CatId);
    ActiveCategories = prodCategories.filter(category => category.enabled);
    res.render('product-listing', 
    {
        products:CategoryProducts,
        categories:ActiveCategories,
        totalCounter:totalCounter.total_item_count,
        prodContent: commonContent.Buy_Button,
        mrpProd: commonContent.MRP,
        menuHome : commonContent.Home_Menu,
        menuProduct : commonContent.Product_Menu,
        menuLogin : commonContent.Login_Menu,
        menuRegister : commonContent.Register_Menu,
        cartItem : commonContent.Cart_Item
    });
})

module.exports = router;