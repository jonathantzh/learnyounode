var path = require('path');
var fs = require('fs');
var a = "";

fs.readdir(process.argv[2],function (err, list) {
  for (i=0; i<=list.length; i++) {
    if (path.extname(list[i])=="."+process.argv[3]) {
        a= a  + list[i]+ '\n';
    }
  }
  console.log(a);
})