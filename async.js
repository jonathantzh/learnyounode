var fs=require('fs');
var str = undefined;
var a = undefined;

function buffer(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        str = fileContents.toString();
        a = str.split("\n").length-1;
        console.log(a)
    })
}
    
//function logResult() {
    //console.log(a);
//}

buffer();
      
//var b = /\n*$/;

//var c = a.match(b);

