var http = require('http');
var bl = require('bl');


http.get(process.argv[2], function(response) {
    response.pipe(bl(function(err, data){
        if (err) {
            return console.error(err)//returns error
        }
    data = data.toString()
    console.log(data.length + '\n' + data);
    }))
})