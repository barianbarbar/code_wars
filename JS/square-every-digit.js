function squareDigits(num){
    return parseFloat(String(num).split("").map((n) => parseFloat(n)**2).join(""));
};

console.log(squareDigits(3212));
console.log(squareDigits(2112));