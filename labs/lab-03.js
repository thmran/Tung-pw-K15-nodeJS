// lab3.1
console.log("================LAB3-1=========================")
let intArr = [1, 2, 3, 4, 5];
console.log(`input array: ${intArr}`)
countOddEventNumber(intArr);

// lab3.2
console.log("================LAB3-2=========================")
let [minNumber, maxNumber] = findMinMaxNumber(intArr);
console.log(`Min number: ${minNumber}`);
console.log(`Max number: ${maxNumber}`)

// lab3.3
console.log("================LAB3-3=========================")
let lab3Arr = [12, 34, 1, 16, 28]
console.log(`input array: ${lab3Arr}`)
let sortArray = arrLabSort(lab3Arr);
console.log(sortArray)

function arrLabSort(sortArr){
    for(let index = 0; index < sortArr.length; index++){
        for (let compareIndex = index + 1; compareIndex < sortArr.length; compareIndex++) {
            if (sortArr[index] > sortArr[compareIndex]) {
                [sortArr[index], sortArr[compareIndex]] = [sortArr[compareIndex], sortArr[index]];
            }
        }
    }
    return sortArr
}

function countOddEventNumber(inputArr){
    let oddNumberArr = [];
    let evenNumberArr =[]; 
    for(let index=0; index < inputArr.length; index++){
        if (inputArr[index] % 2 == 0) {
            evenNumberArr.push(inputArr[index]);
        } else {
            oddNumberArr.push(inputArr[index]);
        }
    }
    console.log(`Even number: ${evenNumberArr}`);
    console.log(`Odd number: ${oddNumberArr}`)
}

function findMinMaxNumber(inputArr){
    let minNumber = inputArr[0];
    let maxNumber = inputArr[0]; 
    for(let index=0; index < inputArr.length; index++){
        if (inputArr[index] <= minNumber) {
            minNumber = inputArr[index];
        } else if (inputArr[index] > maxNumber) {
            maxNumber = inputArr[index];
        }
    }
    return [minNumber,maxNumber]
    }
