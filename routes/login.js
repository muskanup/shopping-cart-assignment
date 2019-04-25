let express = require('express');
let router = express.Router();
let totalCounter = require('./constant');
/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login',{totalCounter:totalCounter.total_item_count});
});

module.exports = router;
