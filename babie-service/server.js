
/** Global variables
 * NOTE: it is not a good practice to declare global variables
 * Use it only to declare variables for libraries... like moment, lodash, etc..
 */
GLOBAL.moment = require('moment');

var express = require('express');
var http = require('http');
var fs = require('fs');
var request = require('request');
var db = require('./src/mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt    = require('jsonwebtoken'); // json web token utility

var app = express();

// get the http request body data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors()); // solve cross site http requests

require('./src/api')(app, { jwt: jwt }); // Require the index route here

app.set('port', process.env.PORT || 8000);
app.set('secretKey', 'mybabie'); // secret variable

var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log("running on " + app.get('port'));
});