let number = prompt("Enter a number:");
number = Number(number);

if (number % 2 === 0) {
    alert(number + " is an Even number");
    console.log(number + " is an Even number");
} else {
    alert(number + " is an Odd number");
    console.log(number + " is an Odd number");
}