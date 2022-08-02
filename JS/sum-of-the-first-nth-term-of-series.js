function SeriesSum(n){
  if (n <= 1) return parseFloat(n).toFixed(2); 
  let fraction = 4;
  let totalFractionSum = 0;
  for (let i = 1; i < n; i++) {
    n > 1 ? totalFractionSum += 1/fraction : 0;
    fraction += 3;
  }
  return (1 + totalFractionSum).toFixed(2);
};

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));