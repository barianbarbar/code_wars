function arrayDiff(a, b) {
    let temp = a;
    for (let j of b) {
       temp = temp.filter((t) => t != j);
    }
    return temp;
};

console.log(arrayDiff([1,2,3,4], []));