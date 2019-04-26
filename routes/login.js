let express = require('express');
let router = express.Router();
let totalCounter = require('./constant');
let commonContent = require('./strings');
/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login',
    {
        totalCounter:totalCounter.total_item_count, 
        footerContent: commonContent.Copyright, 
        loginHeading: commonContent.Login_Heading, 
        loginDesc: commonContent.Login_Desc,
        loginBtn : commonContent.Login_Button,
        Email : commonContent.Email,
        Password : commonContent.Password,
        menuHome : commonContent.Home_Menu,
        menuProduct : commonContent.Product_Menu,
        menuLogin : commonContent.Login_Menu,
        menuRegister : commonContent.Register_Menu,
        cartItem : commonContent.Cart_Item
    });
});

module.exports = router;
