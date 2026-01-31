let num1 = prompt('Enter number 1');
num1 = Number(num1);
let num2 = prompt('Enter number 2');
num2 = Number(num2);
let num3 = prompt('Enter number 3');
num3 = Number(num3);

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} 
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} 
else {
    largest = num3;
}

alert('The largest number is ' + largest);
console.log('The largest number is', largest);