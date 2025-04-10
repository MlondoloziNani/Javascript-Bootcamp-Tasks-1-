//Exercise 1: Temperature check

//if else statement
let temperature = -956;

if(temperature < 0){
    console.log('It\'s freezing!');
}else if(temperature >= 0 && temperature <= 15 ){
    console.log('It\'s cold.');
}else if(temperature >= 16 &&  temperature <= 25){
    console.log('It\'s mild.')
}else{
    console.log('It\'s warm.')
}

//switch statement
switch(true){
    case (temperature < 0 ) :
        console.log('It\'s freezing!');
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log('It\'s cold.');
        break;
    case (temperature >= 16 &&  temperature <= 25):
        console.log('It\'s mild.');
        break;
    default:
        console.log('It\'s warm.')
}

//Exercise 2: Divisibility Check

//if else statement
let number = 30;

if(number % 2 === 0 && number % 3 === 0) {
    console.log('Divisible by both.');
}else if(number % 2 === 0){
    console.log('Divisible by 2.');
}else if(number % 3 === 0){
    console.log('Divisible by 3.')
}else {
    console.log('Not divisible by 2 or 3.')
}

//switch statement
switch (true){
    case (number % 2 === 0 && number % 3 === 0):
        console.log('Divisible by both.');
        break;
    case (number % 2 === 0):
        console.log('Divisible by 2.');
        break;
    case(number % 3 === 0):
        console.log('Divisible by 3.')
        break;
    default:
        console.log('Not divisible by 2 or 3.')
}

//Exercise 3: For loops
//Q1
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//Q2
for(let i = 1; i < 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Q3
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

//Q4
const numbers1 = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers1.length; i++){
    console.log(numbers1[i])
}

//Q5
const numbers2 = [3,7, 2, 5, 10, 6];
let largest = numbers2[0];

for (let i = 0; i < numbers2.length; i++){
    if(numbers2[i] > largest){
        largest = numbers2[i];
    }
}
console.log(largest);

//Exercise 4: While loops
//Q1
let num1 = 1;
while (num1 <= 10){
    console.log(num1);
    num1++;
}

//Q2
let num2 = 1;
while (num2 < 20){
    if(num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}

//Q3
let whileSum = 0;
let i = 0;
while (i <= 100){
    whileSum += i;
    i++;
}
console.log(whileSum);

//Q4
let multiOfFive = 5;
while (multiOfFive < 50){
    console.log(multiOfFive)
    multiOfFive += 5;
}

//Exercise 5: Do While loops
//Q1
let k = 1;
do{
    console.log(k);
    k++;
}while (k <= 10);

//Q2
let j = 1;
let doWhileSum = 0;
do{
    doWhileSum += j;
    j++
}while (j <= 100);
console.log(doWhileSum);

//Q3
let q;

do {
    q = parseInt(prompt("Enter a number greater than 10:"));
} while (isNaN(q) || q <= 10);

alert("Thank you! You entered: " + q);

//Q4
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (guess !== correctNumber);

alert("Correct! The number was " + correctNumber);




