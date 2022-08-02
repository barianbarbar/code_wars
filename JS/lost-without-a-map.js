function maps(x){
    return x.length > 0 ? x.map((i) => i + i) : 0;
};

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4])); 
console.log(maps([2, 2, 2, 2, 2, 2])); 