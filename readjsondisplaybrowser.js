// Read data from json and display in browser

var http = require("http");
var fs = require("fs");
const PORT = 8888;

http.createServer((req, res) => {  // Corrected the arrow function syntax
    fs.readFile("./student.json", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });  // Sending status 500 for errors
            res.write("Error reading file: " + err);
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });  // Sending a 200 status code
            res.write(data);  // Send the data (contents of the file)
            res.end();
        }
    });
}).listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);  // Corrected the string concatenation
});
