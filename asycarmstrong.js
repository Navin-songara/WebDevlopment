const { rejects } = require("assert");

// Example: Check Armstrong using non-blocking or asynchronous approach
const check = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num === "number" && num > 100 && num < 999) {
            let h, t, u, sum, res;
            h = parseInt(num / 100);
            t = (parseInt(num / 10)) % 10;
            u = num % 10;
            sum = (h * h * h) + (t * t * t) + (u * u * u);
            if (sum === num) {
                res = "Armstrong";
            } else {
                res = "Not Armstrong";
            }
            resolve(res);
        } else {
            reject("The number provided must be of type number or it should be a three-digit number");
        }
    });
};

// Calling the Armstrong check function
(async () => {
    try {
        const num = 371; // You can change this to test other numbers
        const result = await check(num);
        console.log("Result:-", result); // This will print whether the number is Armstrong or not
    } catch (err) {
        console.log("Error =", err);
    }
})();

// Example: Print multiplication table using non-blocking or asynchronous approach
const table = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            let res = "";
            for (let i = 1; i <= 10; i++) {
                let t = num * i;
                res += `${num} * ${i} = ${t}\n`;
            }
            resolve(res);
        } else {
            reject('The number provided must be of type number');
        }
    });
};

// Calling the multiplication table function
(async () => {
    try {
        const num = 8; // You can change this to any number for the table
        const result = await table(num);
        console.log("Multiplication Table:\n", result); // This will print the multiplication table
    } catch (err) {
        console.log("Error =", err);
    }
})();
