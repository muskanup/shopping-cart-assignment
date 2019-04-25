let express = require('express');
let router = express.Router();
let totalCounter = require('./constant');
/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register',{totalCounter:totalCounter.total_item_count});
});

module.exports = router;