function getCount(str) {
    return str
    .split("")
    .filter((s) => s === "a" || s === "e" || s === "i" || s === "o" || s === "u").length;
}
console.log(getCount("abracadabra"));
