function countingValleys(n, s) {
    let count = 0;
    let level = 0;
    let valleyStatus = false;
    const STATUS = {
        'UP': 'U',
        "DOWN": 'D',
    }

    for (let step of s.split('') || []) {
        if (step === STATUS['UP']) {
            level++;
            if (level === 0 && valleyStatus === true) {
                count++;
                valleyStatus = false;
            }
        } else {
            if (level === 0) {
                valleyStatus = true;
            }
            level--;
        }
    }

    return count;
}

console.log(countingValleys(10, 'DDUUDDUDUUUD'))