var fs=require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString();

var a = str.split("\n");

//var b = /\n*$/;

//var c = a.match(b);

console.log(a.length-1);