/*VERY EASY: Write a function named min that takes two arguments and returns their minimum.*/

function min(value1, value2) {
    if(value1 > value2){
       return value2 
    } else if (value1 < value2){
        return value1
    } else {
        return `numbers are equal`
    }
}
console.log(min(1, 1));


/*EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."*/

/*
var students = [["Doe", "Jane", "20"], ["Black", "Jack", "21"], ["Nye", "Bill", "23"]];

console.log(`Hello, my name is ${students[1][1]} ${students[1][0]} and I'm ${students[1][2]} years old.`);
*/

/*MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).*/

/*
var userInput = parseint(prompt('Give me a number for a month and I will tell you which month it is'));

switch(userInput) {
    case 1:
      console.log(`${userInput} = January`);
      break;
    case 2:
        console.log(`${userInput} = February`);
        break;
    case 3:
        console.log(`${userInput} = March`);
        break;
    case 4:
        console.log(`${userInput} = April`);
        break;
    case 5:
        console.log(`${userInput} = May`);
        break;
    case 6:
        console.log(`${userInput} = June`);
        break;  
    case 7:
        console.log(`${userInput} = July`);
        break;  
    case 8:
        console.log(`${userInput} = August`);
        break;
    case 9:
        console.log(`${userInput} = September`);
        break;
    case 10:
        console.log(`${userInput} = October`);
        break;
    case 11:
        console.log(`${userInput} = November`);
        break;
    case 12:
        console.log(`${userInput} = December`);
        break;
    default:
        alert('Input is not valid. Cannot be converted to a month.')
}
*/


/*HARD: Given the information below for Tom and Jerry. 
Tom -height:  9in   	mass: 8 g
Jerry -height: 10in 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).*/


var heightJerry = 10;
var massJerry = 45;
var BMIJerry = massJerry / heightJerry ** 2;
console.log(BMIJerry)

var heightTom = 9;
var massTom = 8;
BMITom = massTom / heightTom ** 2;
console.log(BMITom);

var higher = BMITom > BMIJerry;
console.log(`Is Tom’s BMI higher than Jerry’s? ${higher}`);

// if (BMITom > BMIJerry) {
//     console.log(`Is Tom’s BMI higher than Jerry’s? True`)
// } else if (BMIJerry > BMITom) {
//     console.log(`Is Tom’s BMI higher than Jerry’s? False`);
// } else {
//     console.log(`Tom and Jerry have the same BMI`) 
// }

