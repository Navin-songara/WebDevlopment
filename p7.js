// Read User Input Text or string Value
const readline = require('readline').createInterface({
    input: process.stdin,  // Corrected "Input" to "input"
    output: process.stdout,
});

var str;  // Declare the variable without TypeScript annotation

readline.question("Enter Some Text: ", text => {
    str = text; 
    readline.close();  // Close the readline interface after input is received
    console.log("Entered Text = " + str);  // Output the entered text
});
