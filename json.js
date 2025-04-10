// JSON:- Java script oject notation . json is used to manage data in Key and value pair .
// json is also used to travel data over the network. json is compressed data storage
//  format.

// SYNTAX:- json object 

// {"keyname":value,----------}

// Example to write data in file in json format

var fs = require("fs");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var rno, sname, marks;

// Ask for RollNo
readline.question("Enter RollNo: ", num => {
    rno = parseInt(num);

    // Ask for Name
    readline.question("Enter Name: ", text => {
        sname = text;

        // Ask for Marks
        readline.question("Enter Marks: ", num => {
            marks = parseInt(num);
            readline.close();  // Close the readline interface after all inputs

            // Read existing data from student.json
            fs.readFile("./student.json", "utf-8", (err, data) => {
                if (err) {
                    console.log("Error reading file:", err);
                } else {
                    // Create a new student object
                    var obj = {
                        rno: rno,
                        sname: sname,
                        marks: marks,
                    };

                    // Parse the existing data into an array
                    var slist = JSON.parse(data);
                    slist.push(obj);  // Push the new student object to the list

                    // Convert the array back into JSON string format
                    var uslist = JSON.stringify(slist, null, 2);

                    // Write the updated data back to the student.json file
                    fs.writeFile("./student.json", uslist, (writeErr) => {
                        if (writeErr) {
                            console.log("Error writing to file:", writeErr);
                        } else {
                            console.log("Data Saved");
                        }
                    });
                }
            });
        });
    });
});

// JSON.parse():- This method is used to convert json type to object type .
// JSON.stringify():- This method is used to convert object type of json type.