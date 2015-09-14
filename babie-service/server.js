var express = require('express');
var http = require('http');
var fs = require('fs');
var request = require('request');
var db = require('./src/mongoose');
var cors = require('cors');


var app = express();

app.use(cors()); // solve cross site http requests

require('./src/api')(app); // Require the index route here

var server = http.createServer(app);
server.listen(8000, function(){
	console.log("babie service is running at http://127.0.0.1:8000/");
})