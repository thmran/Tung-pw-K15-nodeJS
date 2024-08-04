// **
//  * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
//  * --> output:
//  * Hey: 1
//  * ban: 2
//  * tui: 1
//  * ten: 2
//  * Teo: 2
//  * ...
//  */

// Welcome! to the JavaScript world, let's code: more examples!
// Please solve the quiz for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
// The program need to allow user to input a sentence, not hard code (optional)


const readline = require('readline-sync');

//Main
countWordsProgram();

function countWordsProgram() {
    let inputStringUser = readline.question('input your string for counting duplicated: ');
    console.log(countWord(inputStringUser));
}

function countWord(inputStringUser) {
    inputStringUser.trim();
    let arrayWords = formattingStringToArray(inputStringUser);
    let countResult = {};
    for (let index = 0; index < arrayWords.length; index++) {
        const word = arrayWords[index];
        if (word in countResult) {
            countResult[word] += 1;
        } else {
            countResult[word] = 1;
        };
    };
    return countResult
}

function formattingStringToArray(inputStringUser) {
    const regex = /(?<=\w)[^\w\s](?=\s|$)/g;
    const formattedString = inputStringUser.replace(regex, "");
    return formattedString.split(/[\s]/);
}