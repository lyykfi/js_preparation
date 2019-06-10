function minimumSwaps(arr) {
    let swapCounter = 0;
    const list = [...arr];
    let arrLength = list.length;

    for (let i = 0; i < arrLength; i++) {
        let minIndex = i;
        let item = list[i];
        let minValue = null;

        for (let j = i + 1; j < arrLength; j++) {
            const item2 = list[j];
            if (!minValue || item2 < minValue) {
                minIndex = j;
                minValue = item2;
            }
        }

        if (minValue && item > minValue) {
            list[i] = minValue;
            list[minIndex] = item;
            swapCounter = swapCounter + 1;
        }
    }

    return swapCounter;
}

const result = minimumSwaps([7, 1, 3, 2, 4, 5, 6]);
console.log(result);