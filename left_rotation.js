function rotLeft(a, d) {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        let newPosition = i - d;
        if (newPosition < 0) {
            let turnPos = a.length;
            while(newPosition !== 0) {
                turnPos = turnPos - 1;
                newPosition = newPosition + 1;

                if (turnPos < 0) {
                    turnPos = a.length - 1;
                }

            }
            newPosition = turnPos;
        }
        result[newPosition]=a[i];
    }

    return result;
}

console.log(rotLeft([5, 1, 2, 3, 4], 3))