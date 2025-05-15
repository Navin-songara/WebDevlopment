// node js :-advance java script library to execute java script without browser. 
// node js provides runtime enviernment to execute java script out of browser. 
// node JS provides CLI cli stands for command line interface.with the help of CLI we can execute js prgram without browser. 
// npm :-node package manager:-npm is a tool which is used to manage libraries and packages for nodejs. 
// with the help of npm we can install libraries. 
// npm provides the setup for node execution.
//just for visualising
// Read User Input 
const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
    }); 
    var a,b,c; 
    readline.question("Enter value of a", num => { 
    a=parseInt(num); 
    readline.question("Enter value of b", num => { 
    b=parseInt (num); 
    readline.close(); 
    c=a+b; 
    console.log("sum of a and b="+c); 
    }); 
}); 
