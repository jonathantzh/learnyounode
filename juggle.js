var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;


function httpGet(index) {
    //for (var j=0; j<= 2; j++) {
        http.get(process.argv[2+index], function(response) {
            response.pipe(bl(function(err, data){
                if (err) {
                    return console.error(err)//returns error
                }
            results[index] = data.toString();
        count++;
        if (count==3) {
  for (var i = 0; i < 3; i++)
    console.log(results[i]) //could be defined as a separate function
        }
            
            }
        ))})

    //}
}            

for (var j=0; j<= 2; j++) {
    httpGet(j);
}