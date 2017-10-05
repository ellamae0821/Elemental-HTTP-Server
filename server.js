/*jshint esversion: 6*/
const  http = require('http');
const fs = require('fs');
const port = 8080;
const StringBuilder = require('stringbuilder');
const handlers = require('./handlers');

var indexData;
var getCss;


http.createServer((req, res) =>{
  console.log(req.url);
  switch (req.method) {
    case 'GET':
    handlers.getRequest(req, res);
      break;

    case 'POST':
      break;
    default:
      break;
  }
}).listen(port);




// fs.stat - / stats.isFile / toLowercase