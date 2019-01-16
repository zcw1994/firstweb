var http  = require('http');

var server =  http.createServer(function(req,res){

  if (req.url==='/favicon.ico') {
    res.end();
    return;
  }


  res.writeHead(200,{
    'Content-Type': 'text/html;charset=utf-8'
  });

  res.write('你是谁');
  res.end();

});

server.listen(3000);