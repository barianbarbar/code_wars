function isIsogram(str){
    const fStr = str.length;
    const sStr = str.toLowerCase().split("").filter((item, pos, self) => self.indexOf(item) === pos).length;
    return fStr === sStr;
};

console.log( isIsogram("Dermatoglyphics"));
console.log( isIsogram("isogram"));
console.log( isIsogram("aba"));
console.log( isIsogram("moOse"));
console.log( isIsogram("isIsogram"));
console.log( isIsogram(""));