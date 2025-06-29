const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

app.use(express.json()); // to parse JSON bodies

// Get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// Get all users as HTML list
app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
});

// Patch (edit) user — placeholder
app.patch("/api/users", (req, res) => {
    return res.json({ status: "pending" });
});

// Start server
app.listen(8004, () => {
    console.log("Server started at port: 8004");
});
