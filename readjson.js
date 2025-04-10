// example to read json file

var fs = require("fs");

fs.readFile("./student.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var slist = JSON.parse(data); // Fixed variable name from `varslist` to `slist`
        for (var i = 0; i < slist.length; i++) {
            console.log(slist[i].rno + " " + slist[i].sname + " " + slist[i].marks);
        }
    }
});
