var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This is where the lexicon server is growing. The lexicon server has no public user interface. \n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
