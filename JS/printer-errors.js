function printerError(s) {
    // your code
   return `${(s.split("").filter((a) => a > "m").length)}/${(s.length)}`;
};

const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s));