/*const http = require("http");
const os = require('os');
const path = require('path');
http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`Current user name:  ${os.userInfo().username} <br>`);
    response.write(`OS type: "  ${os.type()} <br>`);
    response.write(`System work time: ${os.uptime()} <br>`);
    response.write(`Current work directory:  ${path.dirname('/C:/nodeJS/hw11.js')} <br>`);
    response.write(`Server file name:  ${path.basename('/C:/nodeJS/hw11.js')} <br>`);
    response.end();
 }).listen(5000);*/



////task2
const http = require('http');
const dt = require('./myfirstmodule');
const os = require('os');
const userName = os.userInfo().username;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`Date of request: ${dt.myDateTime()} <br>`);
  res.write(dt.myMessage(userName));
  res.end();
}).listen(5000);



