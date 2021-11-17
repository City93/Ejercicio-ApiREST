var express = require('express');
var router = express.Router();
let filmInfo = require('../utils/film')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

filmInfo().then(data=>console.log(data))

module.exports = router;
