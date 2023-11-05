var express = require('express');
var router = express.Router();
var app = express();
const request = require('request');
var md5 = require ('md5');
const sqlite3 = require('sqlite3');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
  router.get('/LoginYRegistro.ejs', function (req, res, next) {
  res.render('LoginYRegistro.ejs');
});


module.exports = router;
