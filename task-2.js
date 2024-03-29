// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddMutiplyNumbers(numbers){
    if(numbers % 2 === 0){
        const sum = numbers / 2;
        return sum;
    }else{
        sum = sum * 2;
        return sum;
    }
}
const oddNumber = 20;
const totalOddNumber = oddMutiplyNumbers(oddNumber);
console.log(totalOddNumber);



// function processNumber(num) {
//     if (num % 2 === 0) {
//         return num / 2;
//     } else {
//         return num * 2;
//     }
// }

// // Example usage:
// const num = 10;
// const result = processNumber(num);
// console.log("Result:", result);
