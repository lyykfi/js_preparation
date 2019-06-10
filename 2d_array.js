
function getHourglass(arr, x, y) {
    let result = 0;

    for (let i = y; i < y + 3; i++) {
        if (arr[x][i] !== undefined) {
            result = result + arr[x][i];
        } else {
            return undefined;
        }
    }

    for (let i = y; i < y + 3; i++) {
        if (arr[x + 2] !== undefined && arr[x + 2][i] !== undefined) {
            result = result + arr[x + 2][i];
        } else {
            return undefined;
        }
    }

    if (arr[x + 1] !== undefined && arr[x + 1][y + 1] !== undefined) {
        result = result + arr[x+1][y+1];
    } else {
        return undefined;
    }

    return result;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let result = undefined;

    arr.forEach((item, x) => {
        item.forEach((item2, y) => {
            const res = getHourglass(arr, x, y);
            if (res !== undefined && (res > result || result === undefined)) {
                result = res;
            }
        }) 
    })

    return result;
}

let result = hourglassSum([
    [-1, 1, -1, 0, 0, 0,],
    [0, -1, 0, 0, 0, 0,],
    [-1, -1, -1, 0, 0, 0,],
    [0, -9, 2, -4, -4, 0,],
    [-7, 0, 0, -2, 0, 0,],
    [0, 0, -1, -2, -4, 0,],
]);

console.log(result);