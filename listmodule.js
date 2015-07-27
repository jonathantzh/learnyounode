var fs = require('fs');
var path = require('path');
var data = [];

module.exports = function(listdir, extStr, callback){
    fs.readdir(listdir, function(err, list) {
        if (err) {
            return callback(err);
        }
        for (i=0; i<=list.length-1; i++) {
            if (path.extname(list[i]) == '.' + extStr) {
                data = data.push(list[i]);
            }
        }
        callback(null, data);
    })
}