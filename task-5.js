// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
} 
// Example usage:
// const number = 15; // Example integer value
// const result = odd_even(number);
// console.log(result); // Output will be "Odd" since 15 is an odd number


function oddEven(numbers){
    if(numbers % 2 === 0){
        return 'its even numbers'
    }
    else{
        return 'its odd Numbers'
    }
}
const number = 31;
const result = oddEven(number);
console.log(result);