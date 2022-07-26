//B1
var randomNum = Math.floor(Math.random()*10);
const isOddNumber = (number) => {
    if (number % 2 == 0) {
        console.log('false')
    } else {
        console.log('true');
    }
}
console.log(randomNum);
isOddNumber(randomNum);

//B2
var randomNum1 = Math.floor(Math.random()*10);
var randomNum2 = Math.floor(Math.random()*10);
const maxOfTwo = (a,b) => {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}
console.log(randomNum1);
console.log(randomNum2);
maxOfTwo(randomNum1, randomNum2);

//B3
var randomNum3 = Math.floor(Math.random()*100);
const divisibleByThreeandFive = (number) => {
    if (number % 15 == 0) {
        console.log('true')
    } else {
        console.log('false')
    }
}
console.log(randomNum3);
divisibleByThreeandFive(randomNum3)

//B4
const arr = [5,3,8,1];
const filterwithRange = (array, a, b) => array.filter((number) => start <= number && number <= end);
console.log(filterwithRange(arr, 1, 4))