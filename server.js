var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer     = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(multer().any());



// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./public/assignment/app.js") (app);

var port = process.env.PORT || 3000;

app.listen(port);