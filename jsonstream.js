var http = require('http');
var url = require('url');

function parseTime(time) {
   return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
    }
}

function unixTime(time) {
   return {
    unixtime: time.getTime()
    }
}


var server = http.createServer(function(req,res) {
    
    if (req.method != 'GET') {
        return res.end('send me a GET\n')
    }
    
    var parsedUrl = url.parse(req.url, true);
    var time = new Date(parsedUrl.query.iso);
    var result;
    
    if (/^\/api\/parsetime/.test(req.url)) {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(parseTime(time))); //.serach() method returns -1 which still counts as true. So use .test() method which returns boolean
    }

    else if (/^\/api\/unixtime/.test(req.url)) {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(unixTime(time)));
    }
    
    else {
      res.writeHead(404)
      res.end()
    }
})

server.listen(process.argv[2]);