/*jshint esversion: 6*/
const  http = require('http');

const fs = require('fs');
const port = 8080;
const StringBuilder = require('stringbuilder');

var indexData;
var getCss;
const indexPath = './public/index.html';
const heliumPath = './public/helium.html';
const hydrogenPath = './public/hydrogen.html';

http.createServer((req, res) =>{
  console.log(req.url);
  switch (req.method) {
    case 'GET':
        if(req.url === '/' || req.url === '/index.html'){
          getHome(req, res);
        }else if(req.url === '/helium.html') {
          getELement(req, res, heliumPath);
        }else if(req.url === '/hydrogen.html'){
          getELement(req, res, hydrogenPath);
        }else if(req.url ==='/styles.css'){
          getCss(req, res);
        }else{
          error404(req, res);
        }
      break;

    case 'POST':
      break;
    default:
      break;
  }
}).listen(port);



function getHome(req, res){
  res.writeHead(200, {'Content-Type': 'text/html' });
  fs.readFile(indexPath, (err, data) => {
  if (err){
      throw err;
  }
  res.write(data);
  res.end();
  });
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

function getELement(req, res, elementPath){
  res.writeHead(200, {'Content-Type': 'text/html' });
  fs.readFile(elementPath, (err, data) => {
  if (err){
      throw err;
  }
  res.write(data);
  res.end();
  });
}



function error404(req, res){
  res.writeHead(404, 'Not Found',  {'Content-Type': 'text/html' });
  fs.readFile('./public/error404.html', (err, data) => {
  if (err){
      throw err;
  }
  res.write(data);
  res.end();
  });
}