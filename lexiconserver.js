var express = require('express');
var fs = require('fs');
var _ = require('underscore');
//Not availible on heroku var natural = require('natural');
var app = express.createServer(express.logger());

app.get('/',function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is where the lexicon server is growing. The lexicon server has no public user interface.\n');

});
app.get('/train',function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('This lexicon is training.\n');


});
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log("Listening on " + port);
});


