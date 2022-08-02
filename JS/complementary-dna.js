function DNAStrand(dna){
    //your code here
    const nStr = dna.split("");
    const result = [];
    nStr.map((d) => {
        switch (d) {
            case "G":
                result.push("C");
                break;
            case "C":
                result.push("G");
                break;
            case "T":
                result.push("A")
                break;
            case "A":
                result.push("T");
                break;
            default:
                break;
        }
    });
    return result.join("");
};

console.log(DNAStrand("ATTGC"));

