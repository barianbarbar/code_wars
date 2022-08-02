function century(year) {
    let result = Math.floor(year / 100);
    return year % 100 === 0 ? result : ++result;
};

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));