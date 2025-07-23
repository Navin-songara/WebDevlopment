
// Calculate factorial using callback function

function mainFunction(fact) {
    console.log("Calculating factorial...");
    setTimeout(function(){
        var n = 5;
        fact(n);  // Call the callback function with n
    }, 5000);
}

function factorial(num) {
    var F = 1;  // Initialize the factorial result
    while (num > 0) {
        F = F * num;  // Multiply by the current number
        num--;         // Decrease the number
    }
    console.log("Factorial Result: " + F);  // Log the result
}

mainFunction(factorial);  // Pass the factorial function as a callback
