function isHappy(n) {
    let answer = n;
    let sumArray = [];

    sumArray.push(answer);
    while (answer !== 1) {

        answer = calulator(answer);

        if (sumArray.includes(answer)) return false;

        sumArray.push(answer);
    }


    return true;
};


function calulator(number) {
    let stringOfNum = String(number);

    let sum = 0;
    for (const n of stringOfNum) {
        sum += Number(n) * Number(n);
    }

    return sum;
}

console.log(isHappy(19));
console.log(isHappy(2));