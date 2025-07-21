// factorial and synchronisation 
const factorial = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {
            let f = 1;
            for (let i = 1; i <= num; i++) {
                f = f * i;
            }
            resolve(f);
        } else {
            reject('The number provided must be of type number');
        }
    });
};

// Calling the asynchronous function
(async () => {
    try {
        const result = await factorial(6);
        console.log('Factorial =', result);
    } catch (err) {
        console.log('Error:', err);
    }
})();
