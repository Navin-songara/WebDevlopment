// Read Browser Save Json
var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");  // Corrected the typo
const PORT = 8088;

http.createServer((req, res) => {
    var udata = url.parse(req.url, true);  // Include 'true' for query string parsing
    var qdata = udata.query;  // qdata contains the parsed query string

    // Read the current contents of the student.json file
    fs.readFile("./student.json", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });  // Sending status 500 for errors
            res.write("Error reading file: " + err);
            res.end();
        } else {
            try {
                var slist = JSON.parse(data);  // Parse the existing data
                var obj = {
                    rno: qdata.rno,
                    sname: qdata.sname,
                    marks: qdata.marks
                };
                slist.push(obj);  // Add new student data to the list

                var ulist = JSON.stringify(slist);  // Convert the list back to JSON
                fs.writeFile("./student.json", ulist, (writeErr) => {
                    if (writeErr) {
                        res.writeHead(500, { "Content-Type": "text/plain" });
                        res.write("Error saving data: " + writeErr);
                    } else {
                        res.writeHead(200, { "Content-Type": "text/plain" });
                        res.write("Data saved successfully!");
                    }
                    res.end();
                });
            } catch (e) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("Error parsing JSON: " + e);
                res.end();
            }
        }
    });
}).listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
