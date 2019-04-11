var express = require('express');
var router = express.Router();
var banners = require('../public/data/banners/index.get.json');
var prodCategories = require('../public/data/categories/index.get.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  ActiveBanners = banners.filter(banner => banner.isActive);
  ActiveCategory = prodCategories.filter(category => category.enabled);
  res.render('index', {banners:ActiveBanners,categories:ActiveCategory});
});

module.exports = router;
