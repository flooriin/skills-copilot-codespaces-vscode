// Create web server

// 1. Import Express
const express = require("express");
const bodyParser = require("body-parser");

// 2. Create an app
const app = express();

// 3. Create a port
const port = 3000;

// 4. Create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create a route to get all comments
app.get("/comments", (req, res) => {
  res.send("GET all comments");
});

// Create a route to get a comment by id
app.get("/comments/:id", (req, res) => {
  res.send("GET a comment by id");
});

// Create a route to create a comment
app.post("/comments", (req, res) => {
  res.send("POST a comment");
});

// Create a route to update a comment by id
app.put("/comments/:id", (req, res) => {
  res.send("PUT a comment by id");
});

// Create a route to delete a comment by id
app.delete("/comments/:id", (req, res) => {
  res.send("DELETE a comment by id");
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});