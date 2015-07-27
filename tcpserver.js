var net = require('net');
var date = new Date();
var adjustedMonth = date.getMonth() + 1;

adjustedMonthlength = adjustedMonth.toString.length;

if (adjustedMonthlength < 2) {
    adjustedMonth = '0' + adjustedMonth;
}

var server = net.createServer(function(socket) {
    socket.write(date.getFullYear() + '-' + adjustedMonth + '-' +
                date.getDate() + ' ' + date.getHours() + ':' +
                date.getMinutes());
    socket.end()
})

server.listen(process.argv[2]);
