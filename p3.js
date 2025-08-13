//Program 3 json
 const readline = require('readline'); // Import the readline module

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
/*readline inbuilt library it provides statndaerd input and output functions to manage user Input at runtime. 
stdin-standerd input 
stdout-standerd output 
question() :-It is inbuilt function to read data from user at run time from console screen. 
close() -inbuilt function to stop reading work from console. 
*/
var a,b,c; 
readline.question("Enter value of a", num => { 
a=parseInt(num); 
readline.question("Enter value of b", num => { 
b=parseInt (num); 
readline.close(); //close() -inbuilt function to stop reading work from console. 
c=a+b; 
console.log("sum of a and b="+c); 
}); 
});

// const readline = require('readline'); // Import the readline module

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// var a, b, c; 

// rl.question("Enter value of a: ", num => { 
//   a = parseInt(num); 
//   rl.question("Enter value of b: ", num => { 
//     b = parseInt(num); 
//     rl.close(); // Close the readline interface after inputs

//     c = a + b; 
//     console.log("Sum of a and b = " + c); 
//   });
// });
