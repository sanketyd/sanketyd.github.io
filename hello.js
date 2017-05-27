var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello testing");
    response.end();
}).listen(8080, function(){
    console.log("listening to port 8080");
});
