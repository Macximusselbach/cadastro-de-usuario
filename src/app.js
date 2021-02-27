const express = require("express");
const path = require("path");
const app = express();

const users = [];

app.use(express.json());
app.use(express.static("public"));

// client routes
app.get("/users", (req, res) => {
  res.sendFile(path.resolve("public/users.html"));
});

// api
app.get("/api/users", (req, res) => {
  res.json({ users: users });
});

app.post("/api/users", (req, res) => {
  const user = {
    id: Date.now(),
    ...req.body
  }
  users.push(user);
  res.status(201).json({ user: user })
});

module.exports = app;
