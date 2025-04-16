var express = require('express');
var app = express();
const PORT = 6777;

app.get("/", (req, res) => {
    res.send("This Is my First Express Application");
    res.end();
});

app.get("/student", (req, res) => {
    res.end();
});

app.listen(PORT, () => {
    console.log("Server is running in port " + PORT);  // Fixed string concatenation
})