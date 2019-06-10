function jumpingOnClouds(c) {
    let maxSum = 2;
    let isJump = 0;
    let counter = 0;
    let i = 0;


    while (i < c.length) {
        if (c[i - 1] === 1 || (c[i + 1] === 1 && i > 0) || isJump === maxSum || i === c.length - 1) {
            console.log(i);
            isJump = 0;
            counter++;
        }

        if (c[i] === 0) {
            isJump++;
        }

        i++;
    }

    console.log('---');

    return counter;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0]));
console.log(jumpingOnClouds([0, 1, 0]));
