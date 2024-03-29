// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(arr, size) { 
    let sum = 0;
    for (let i = 0; i < size; i++) {
        if (size <= 0) {
            return 0;
        }
        sum += arr[i];
    }

    return sum / size;
}

// Example usage:
const array = [5, 10, 15, 20, 25];
const size = array.length;
const average = make_avg(array, size);
console.log("Average:", average);
