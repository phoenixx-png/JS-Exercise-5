let numbers = [1, 2, 3, 4, 5];

for (let num = 0; num < numbers.length; num++) {
    console.log(numbers[num]);
}

let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] % 2 === 0) {
        console.log(numbers[num]);
    }
}

let sum = 0;
for (let num = 0; num < numbers.length; num++) {
    sum += numbers[num];
}
console.log("Sum of all numbers:", sum);