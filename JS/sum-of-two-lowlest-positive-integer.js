function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const rmNonPos = numbers.filter(num => num > 0);
    const fnum = Math.min(...rmNonPos);
    const sortNum = rmNonPos.filter(num => num != fnum);
    const snum = Math.min(...sortNum);
    return fnum + snum;
};

sumTwoSmallestNumbers([-12, 3, 4, 10]);
sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
sumTwoSmallestNumbers([52, 76, 14, 12, 4]);