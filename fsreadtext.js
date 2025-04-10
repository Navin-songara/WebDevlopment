// Read Text from file

const { error } = require("console");
var fs=require("fs");
const { format } = require("path");

fs.readFile("./amit.txt","utf-8",(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data);
    }
});

// readfile function ke parameters
// 1.First parameter filename
// 2.second parameter text format utf-8 universal text format 8 version. it convert binary 
//   data into standard text format
// 3.Third parameter arrow function and in arrow function two parameters
//   one is err:- if error occurred in data reading it will display error

//   Second is data it get data from file and  we can use it to show data

  
