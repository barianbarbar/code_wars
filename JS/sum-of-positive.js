function positiveSum(arr) {
  const result = arr.filter((a) => a > 0);
  return result.length > 0 ? result.reduce((pre, cur) => pre + cur) : 0;
}

console.log(positiveSum([1,2,3,4,5]));
// 15
console.log(positiveSum([1,-2,3,4,5]));
// 13
console.log(positiveSum([]));
// 0
console.log(positiveSum([-1,-2,-3,-4,-5]));
// 0
console.log(positiveSum([-1,2,3,4,-5]));
// 9