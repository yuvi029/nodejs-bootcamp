// Import the built-in 'http' module
// Used to create and manage an HTTP server
const http = require("http");

// Import the 'fs' (File System) module
// Used for interacting with the file system (reading/writing files)
const fs = require("fs");

// Import the 'url' module
// Used to parse and work with URLs and their query parameters
const url = require("url");

// Create an HTTP server using the createServer method
// It takes a callback with request (req) and response (res) objects
const myserver = http.createServer((req, res) => {
    
    // Generate a log message with a timestamp and requested URL
    const log = `${Date.now()}: ${req.url} New Req received\n`;

    // Parse the request URL, and set `true` to parse the query string into an object
    const myurl = url.parse(req.url, true);

    // Append the log message to a file named 'log.txt'
    // If the file doesn't exist, it will be created
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            // Log an error message if file writing fails
            console.error("Error writing to log file:", err);
        }

        // ROUTING: Based on the pathname of the request URL
        switch (myurl.pathname) {
            case '/':
                // If the user visits '/', return home page message
                res.end("home page");
                break;

            case '/about':
                // If the user visits '/about', optionally take a query parameter 'myname'
                // Example: http://localhost:8000/about?myname=Yuvraj
                const username = myurl.query.myname || "guest";
                res.end(`About Page. Hello, ${username}`);
                break;

            default:
                // For any other URL, respond with "error"
                res.end("error");
        }
    });
});

// Start the server and have it listen on port 8000
// Once it starts, log a message to the console
myserver.listen(8000, () => console.log("server started"));
