const removeFromArray = function(arr, ...args) {
    return arr.filter((char) => !args.includes(char));
};

// Do not edit below this line
module.exports = removeFromArray;
