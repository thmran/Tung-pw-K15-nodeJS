const readline = require('readline-sync');

// Lab 2.1 & 2.3:
let heightInput = Number(readline.question('input height(m): ' ));
let weightInput = Number(readline.question('input weight(kg): '));
let bmiValue = bmiCalculate(heightInput,weightInput);
bmiAdvise(bmiValue,heightInput,weightInput)

// Lab 2.2:
let inputText = readline.question('input number: ' );
if (isNaN(inputText)){
    console.log('the input is not a number');
} else (
    checkOddEvenNumber(Number(inputText))
);

function bmiCalculate(height, weight) {
    let bmiNumber = weight / (height * height) ;
    console.log('Your BMI is: ' + bmiNumber.toFixed(2));
    if (bmiNumber < 18.5){
        console.log('Underweight')
    } else if(bmiNumber <= 24.9){
        console.log('Normal weight')
    } else if(bmiNumber <= 29.9)
        console.log('Overweight ')
    else (console.log('Obesity'));
    return bmiNumber;
  }

function bmiAdvise(bmiValue,height, weight){
    const minNormalWeight = 18.5 * height * height
    const maxNormalWeight = 24.9 * height * height
    if (bmiValue < 18.5){
        suggestWeightAdjust = minNormalWeight - weight
        console.log(`suggest to increase weight(kg): ${suggestWeightAdjust.toFixed(2)}`)
    } else if (bmiValue > 24.9){
        suggestWeightAdjust = weight - maxNormalWeight
        console.log(`suggest to decrease weight(kg): ${suggestWeightAdjust.toFixed(2)}`)
    }
}

function checkOddEvenNumber(number){
    if (number % 2 == 0 ){
        console.log(`${number} is even`)
    } else (console.log(`${number} is odd`));
}