const reverseString = function(string) {
    let newString = "";
    for (let j = string.length - 1; j >= 0; j--) {
        newString += string.charAt(j);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
