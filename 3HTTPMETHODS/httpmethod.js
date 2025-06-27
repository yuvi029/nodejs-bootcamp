const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req received\n`;
    const myurl = url.parse(req.url, true); // <-- `true` to parse query string

    fs.appendFile("log1.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }

        // Routing logic
        switch (myurl.pathname) {
            case '/':
                if(req.method==='GET') res.end("home page")
                break;
            case '/about':
                const username = myurl.query.myname || "guest";
                res.end(`About Page. Hello, ${username}`);
                break;
                case './signup':
                    if(req.method==='GET') res.end("this is a signup form")
                    else if(req.method==='post'){
                res.end("success");
                    }   
            default:
                res.end("error");
        }
    });
});

myserver.listen(8002, () => console.log("server started"));
