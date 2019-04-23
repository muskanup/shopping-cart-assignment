var express = require('express');
var router = express.Router();
var prodListing = require('../public/data/products/index.get.json');
var prodSelected = [];
var checkoutAmount = 0;

/* GET cart page. */
router.get('/', function (req, res, next) {
    res.render('cart',{productselect: prodSelected, checkoutAmount: checkoutAmount});
});

router.get('/addtocart/:id', function (req, res, next) {
    prodListing.forEach(element => {
        if (element.id === req.params.id) {
            if (element.count == undefined) {
                element.count = 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
                // element.price = element.price * element.count;
                prodSelected.push(element);
            } else {
                element.count = element.count + 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
            }       
        }        
    });
    res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount}));
});

router.get('/changecartcount/:id/:operation', function (req, res, next) {
    if(req.params.operation == "add"){
        prodSelected.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count + 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;
            }
        });

        res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount}));
    }
    else if(req.params.operation == "remove"){
        prodSelected.forEach(element => {
            if (element.id === req.params.id) {
                element.count = element.count - 1;
                element.totalprice = element.price * element.count;
                checkoutAmount = checkoutAmount + element.price;         
            }
        });
        res.end(JSON.stringify({ id: req.params.id, element: prodSelected, checkoutAmount: checkoutAmount}));
    }
});
module.exports = router;