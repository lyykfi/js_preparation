function twoSum(arr, sum) {
    const result = [];
    const store = [];

    for(let item of arr) {
        const pair2 = sum - item;

        if (store.indexOf(pair2) !== -1) {
            result.push([item, pair2]);
        }
        store.push(item);
    }

    return result;
}

console.log(twoSum([1, 2, 2, 3, 4], 4));