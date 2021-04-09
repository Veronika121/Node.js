/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const fs = require('fs');
//create a server
let server = http.createServer(function (req, res) {
  if (req.url === '/') {
    const cont = fs.readFileSync('./index.html', 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.write(cont);
  }
  if (req.url === '/index.js') {
    const cont = fs.readFileSync('./index.js', 'utf8');
    res.setHeader('Content-Type', 'text/javascript');
    res.write(cont);
  }
  if (req.url === '/style.css') {
    const cont = fs.readFileSync('./style.css', 'utf8');
    res.setHeader('Content-Type', 'text/css');
    res.write(cont);
  }

  res.end(); // Ends the response
});

server.listen(3000, () => console.log('server running')); // The server starts to listen on port 3000
