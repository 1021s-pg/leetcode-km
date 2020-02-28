var fizzBuzz = function(n) {
    const results = [];
    let word = "";
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            if(i % 3 === 0) word += "Fizz";
            if(i % 5 === 0) word += "Buzz";
        } else {
            word = JSON.stringify(i);
        }
        results.push(word);
        word = "";
    }
    
    return results;
};