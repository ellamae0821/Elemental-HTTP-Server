/*jshint esversion: 6*/

module.exports = {
  getRequest : getRequest
};


const indexPath = './public/index.html';
const heliumPath = './public/helium.html';
const hydrogenPath = './public/hydrogen.html';
const errorPath = './public/error404.html';
const fs = require('fs');


function getRequest (req, res) {
  switch (req.url) {
    case '/':
      getPath(req, res, indexPath);
      break;
    case '/index.html':
      getPath(req, res, indexPath);
      break;
    case '/helium.html':
      getPath(req, res, heliumPath);
      break;
    case '/hydrogen.html':
      getPath(req, res, hydrogenPath);
      break;
    case '/styles.css':
      getCss(req, res);
      break;
    default:
      getPath(req, res, errorPath);
      break;
  }
}

function getCss (req, res){
  res.writeHead(200, {'Content-Type': 'text/css' });
  fs.readFile('./public/css/styles.css', (err, data) => {
  if (err){
      throw err;
  }
  res.write(data);
  res.end();
});
}

function getPath(req, res, path){
  res.writeHead(200, {'Content-Type': 'text/html' });
  fs.readFile(path, (err, data) => {
  if (err){
      throw err;
  }
  res.write(data);
  res.end();
  });}




