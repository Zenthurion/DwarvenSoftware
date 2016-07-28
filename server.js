var http = require('http');
var dispatcher = require('httpdispatcher');

const PORT = 80;

function handleRequest(request, response) {
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
    response.end('Server Works!' + request.url);
}

var server = http.createServer(handleRequest)

server.listen(PORT, function() {
    console.log("Server listening on localhost:%s", PORT);
})

dispatcher.setStatic('resources');

dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});

dispatcher.onPost("/post1", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
})

