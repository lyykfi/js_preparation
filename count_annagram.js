function sherlockAndAnagrams(s) {
    const pairs = [];
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
        let pair = s[i];
        pairs.push(s[i])
        for(let j = i + 1; j < s.length; j++) {
            pair = (pair + s[j]).split('').sort().join('');
            pairs.push(pair);
        }
    }

    for (let j = 0; j < pairs.length; j++) {
        for (let i = j + 1; i < pairs.length; i++) {
            if (pairs[j] === pairs[i]) {  
                counter++    
            }
        }
    }

    return counter;
}
//console.log(sherlockAndAnagrams('ifailuhkqq'));
console.log(sherlockAndAnagrams('cdcd'));