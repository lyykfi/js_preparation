function minimumBribes(q) {
    let countMove = 0;
    const moves = 2;
    
    for(let i = 0; i < q.length; i++) {
        if (q[i] !== i && q[i] < q[i+ 1]) {
            for (let j = 0; j < moves; j++) {
                [q[i], q[i + j]] = [q[i + j], q[i]];
                countMove = countMove + 1;
                
                if(q[i + j] === i + j) {
                    break;
                } 
            }
        }
    }

    console.log(q);

    return countMove;

}

console.log(minimumBribes([2, 5, 1, 3, 4]))