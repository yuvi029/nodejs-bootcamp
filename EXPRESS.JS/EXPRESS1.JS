// we needed express.js    :- Node.js gives you a basic http module 
// But it’s very manual — you must handle routes, headers, status codes, etc., yourself.
//in node .js we need to create case for each route
//Express.js is a minimal, flexible, and fast web framework for Node.js used to build web applications and APIs easily.

const express = require("express");
const app = express();

// Route for Home Page
app.get('/', (req, res) => {
    const age = req.query.age || "unknown";
    return res.send(`Hello from Home Page. Your age is: ${age}`);
});

// Route for About Page
app.get('/about', (req, res) => {
    return res.send("hello from about page");
});

// Start server directly with Express
app.listen(8003, () => console.log("server started on http://localhost:8003"));



