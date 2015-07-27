var http = require('http');
var data = undefined;

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8').on("data", function(data) {   
    console.log(data);
    })

})

