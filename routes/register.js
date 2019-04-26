let express = require('express');
let router = express.Router();
let totalCounter = require('./constant');
let commonContent = require('./strings');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register',
  {
    totalCounter:totalCounter.total_item_count, 
    footerContent: commonContent.Copyright,
    registerHeading: commonContent.Register_Heading, 
    registerDesc: commonContent.Register_Desc,
    registerBtn : commonContent.Register_Button,
    Email : commonContent.Email,
    Password : commonContent.Password,
    firstName : commonContent.First_Name,
    lastName : commonContent.Last_Name,
    confPassword : commonContent.Conf_Password,
    menuHome : commonContent.Home_Menu,
    menuProduct : commonContent.Product_Menu,
    menuLogin : commonContent.Login_Menu,
    menuRegister : commonContent.Register_Menu,
    cartItem : commonContent.Cart_Item
  });
});

module.exports = router;