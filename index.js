const http = require('http');                       // import the http core module

const hostname = 'localhost';                       // Setup the hostname
const port = 3000;                                  // Setup the port number

const server = http.createServer((req,res) => {
    console.log(req.headers);
    res.statusCode = 200;                           // Status code for OK
    res.setHeader('Content-Type','text/html');      // Set response type
    res.end('<html><body><h1>Hello World</h1></body></html>');  //Response, in this case basic HTML 
});

server.listen(port,hostname,() => {                 // Starts the server, the server listens for requests on the port
    console.log(`Server started on http://${hostname}:${port}`);
});