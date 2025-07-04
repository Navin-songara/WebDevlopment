// By if and else
// Example check even or odd using non blocking or asynchronize.

const check = (num) => {
    return new Promise((resolve, reject) => {
        let res;
        if (typeof num === 'number') {
            if (num % 2 === 0) {
                res = "Number is Even";
            } else {
                res = "Number is Odd";
            }
            resolve(res);
        } else {
            reject('The number provided must be of type number');
        }
    });
};

// Calling the async function
(async () => {
    try {
        const result = await check('A');  // This will reject because 'A' is not a number
        console.log('Result = ' + result);
    } catch (err) {
        console.log('Error = ' + err);
    }
})();
