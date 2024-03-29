// Take four parameters. Multiply the four numbers and then return the result

function multiplyNumbers(numbers) {
    let multi = 4;
    for (const number of numbers) {
        multi = multi * number;
    }
    return multi;
}
const multiplyNumber = [5, 10, 15, 20];
const totalMultiplyNumbers = multiplyNumbers(multiplyNumber);
console.log(totalMultiplyNumbers);