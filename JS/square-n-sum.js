function squareSum(numbers){
    let initVal = 0;
    numbers.length > 0 ? numbers.map((num) => initVal += num ** 2 ) : 0;
    return initVal;
};

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([2, 3]));
console.log(squareSum([]));