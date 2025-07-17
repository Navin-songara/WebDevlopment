// fs module:- file system module, it is used to manage file operations .
// fs module provides functions to store the data in file and read data from a file
// fs is inbuilt module.

// functions:- 
// functions :-
// 1.writeFile():- used to write data
// 2.readFile():-used to read data in file.

// Example read user input and write file

var fs = require("fs");
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });

readline.question("Enter some text: ", (text) => {
    var str = text;
    fs.writeFile("DataSaved.txt", str, (err) => {
        if (err) {
            console.log("Error writing to file", err);
        } else {
            console.log("Data saved to file!");
        }
    });
    readline.close();
});
