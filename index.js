const http = require('http');                       // import the http core module

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port,hostname,() => {                 // Starts the server, the server listens for requests on the port
    console.log(`Server started on http://${hostname}:${port}`);
});