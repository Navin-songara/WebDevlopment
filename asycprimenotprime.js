// example 3 asychronize programing check prime or not prime
//asychronize program 
const check = (n) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            var c = 0, i, res;
            for (i = 1; i <= n; i++) {
                if (n % i === 0) {
                    c = c + 1;
                }
            }
            if (c === 2) {
                res = "Number is Prime";
            } else {
                res = "Number is not Prime";
            }
            resolve(res);
        }, 3000);
    });
};

async function showFun(n) {
    const ans = await check(n);  // Wait for the result from check
    console.log(ans);  // Display the result
}

var n = 5;
showFun(n);  // Test the function with a number
