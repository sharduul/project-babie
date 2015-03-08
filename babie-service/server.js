var express = require('express');
var http = require('http');
var fs = require('fs');
var request = require('request');


var app = express();

// Require all the APIs
require('./src/api/names.js')(app);


var server = http.createServer(app);
server.listen(8000, function(){
	console.log("babie service is running at http://127.0.0.1:8000/");
})