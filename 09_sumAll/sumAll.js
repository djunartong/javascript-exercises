const sumAll = function(a, b) {
    if (a > b) {
        [a, b] = [b, a];
    }
    const arr = [];
    arr.length = b - a + 1;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = a;
        a++;
    }
    return arr.reduce((c, d) => c + d);
};

// Do not edit below this line
module.exports = sumAll;