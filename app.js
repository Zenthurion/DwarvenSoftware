const http = require('http');
const https = require('https');

const httpPort = 80;
const httpsPort = 443;

const requestHandler = (req, res) => {
    console.log(req.url);
    res.end("Dwarven Software");
};
const httpsServer = https.createServer(requestHandler);
httpsServer.listen(httpsPort, (err) => {
    if(err) {
        return console.log("Something bad happened...");
    }
    console.log("Server is listening on port " + httpsPort);
});

const httpServer = http.createServer((req, res) => {
    res.writeHead(307, {'Location': 'https://' + req.headers['host'] + req.url});
    res.end();
});