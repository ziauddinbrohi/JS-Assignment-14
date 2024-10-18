// Question # 01
// function displayCurrentDateTime() {
//     var now = new Date();
//     document.write(now);
// }
// displayCurrentDateTime();

// Question # 02
// function greetUser (firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//         var greetingMessage = `Hello, ${fullName}! Welcome!`;
//     alert(greetingMessage);
//     document.body.innerHTML = `<h1>${greetingMessage}</h1>`;
// }
// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// greetUser (firstName, lastName);

// Question # 03
// function addTwoNumbers() {
//     var num1 = prompt("Please enter the first number:");
//     var num2 = prompt("Please enter the second number:");
//     var number1 = parseFloat(num1);
//     var number2 = parseFloat(num2);
//     var sum = number1 + number2;
//     alert(`The sum of ${number1} and ${number2} is ${sum}.`);
// }
// addTwoNumbers();

// Question # 04
// function calculate(num1, num2, operator) {
//     var operations = {
//         '+': function(a, b) { return a + b; },
//         '-': function(a, b) { return a - b; },
//         '*': function(a, b) { return a * b; },
//         '/': function(a, b) {
//             if (b === 0) {
//                 alert("Error: Division by zero is not allowed.");
//                 return null; // Return null to indicate an error
//             }
//             return a / b;
//         }
//     };
//     if (operations[operator]) {
//         var result = operations[operator](num1, num2); // Call the operation
//         alert(`The result of ${num1} ${operator} ${num2} is ${result}.`);
//     } else {
//         alert("Error: Invalid operator. Please use +, -, *, or /.");
//     }
// }
// var firstNumber = parseFloat(prompt("Please enter the first number:"));
// var secondNumber = parseFloat(prompt("Please enter the second number:"));
// var operation = prompt("Please enter an operator (+, -, *, /):");
// calculate(firstNumber, secondNumber, operation);

// Question # 05
// function square(num) {
//     var result = num * num; 
//     return result; 
// }
// var number = parseFloat(prompt("Please enter a number to square:"));
// var squaredValue = square(number);
// alert(`The square of ${number} is ${squaredValue}.`);

// Question # 06
// function factorialIterative(n) {
//     if (n < 0) return "Error: Negative numbers do not have factorials.";
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i; 
//     }
//     return result;
// }
// var number = parseInt(prompt("Please enter a non-negative integer to compute its factorial:"));
// alert(`The factorial of ${number} is ${factorialIterative(number)}.`);


// Question # 07
// function displayCounting(start, end) {
//     if (start > end) {
//         alert("Error: Start number must be less than or equal to end number.");
//         return;
//     }

//     let countingResult = "";

//     for (let i = start; i <= end; i++) {
//         countingResult += i + " "; 
//     }
//     alert("Counting: " + countingResult);
// }
// var startNumber = parseInt(prompt("Please enter the start number:"));
// var endNumber = parseInt(prompt("Please enter the end number:"));
// displayCounting(startNumber, endNumber);

//  Question # 08 
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(value) {
//         return value * value; 
//     }
//     if (base < 0 || perpendicular < 0) {
//         return "Error: Base and perpendicular must be non-negative.";
//     }
//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse; 
// }
// var base = parseFloat(prompt("Please enter the length of the base:"));
// var perpendicular = parseFloat(prompt("Please enter the length of the perpendicular:"));
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// alert(`The hypotenuse of the triangle is: ${hypotenuse}`);

// Question # 09
// function calculateArea(width, height) {
//     return width * height; 
// }
// let area1 = calculateArea(5, 10); 
// console.log(`The area of the rectangle with width 5 and height 10 is: ${area1}`);
// let rectangleWidth = 7; 
// let rectangleHeight = 3; 
// let area2 = calculateArea(rectangleWidth, rectangleHeight);
// console.log(`The area of the rectangle with width ${rectangleWidth} and height ${rectangleHeight} is: ${area2}`);

// Question # 10
// function isPalindrome(str) {
//     const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = normalizedStr.split('').reverse().join('');
//     return normalizedStr === reversedStr;
// }
// const testString1 = "Madam";
// const testString2 = "Hello";
// console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`); // true
// console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`); // false

// Question # 11
// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(word => {
//         if (word.length > 0) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }
//         return word; 
//     });
//     return capitalizedWords.join(' ');
// }
// const exampleString = 'the quick brown fox';
// const result = capitalizeFirstLetterOfEachWord(exampleString);
// console.log(result); 

// Question # 12
// function findLongestWord(str) {
//     const words = str.split(' ');
//     const longestWord = words.reduce((longest, current) => {
//         if (current.length > longest.length) {
//             return current;
//         }
//         return longest;
//     }, '');

//     return longestWord;
// }

// const exampleString = 'Web Development Tutorial';
// const longestWord = findLongestWord(exampleString);
// console.log(longestWord); 

// Question # 13
// function countLetterOccurrences(str, letter) {
//     const normalizedStr = str.toLowerCase();
//     const normalizedLetter = letter.toLowerCase();
//         let count = 0;
//     for (let char of normalizedStr) {
//         if (char === normalizedLetter) {
//             count++;
//         }
//     }

//     return count;
// }
// const sampleString = 'JSResourceS.com';
// const letterToCount = 'o';
// const occurrences = countLetterOccurrences(sampleString, letterToCount);
// console.log(`The letter '${letterToCount}' occurs ${occurrences} times in '${sampleString}'.`); 

// Question # 14
// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}`);
// }
// function calcArea(radius) {
//     const area = Math.PI * radius * radius;
//     console.log(`The area is ${area.toFixed(2)}`);
// }
// const radius = 5; 
// calcCircumference(radius); 
// calcArea(radius);        