listmodule = require('./listmodule.js');
var listdir= process.argv[2];
var extStr = process.argv[3];

listmodule(listdir, extStr, function(err, data) {
    if (err) {
        return console.log(err)
    }
    else {
        console.log(data);
    }
})