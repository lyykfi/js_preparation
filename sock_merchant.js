// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const buffer = {};
    let count = 0;

    for (let item of ar) {
        if (!buffer[item]) {
            buffer[item] = 1;
        } else {
            buffer[item] = buffer[item] + 1;
        }
    }

    for (let key in buffer) {
        count = count + parseInt(buffer[key] /2, 10);
    }

    return count;
}

let result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);