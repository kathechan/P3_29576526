var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/LoginYRegistro', function (req, res, next) {
  res.render('LoginYRegistro.ejs');
});


module.exports = router;
