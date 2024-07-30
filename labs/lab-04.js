const readline = require('readline-sync');

let accountList = new Map();
let selectOptionNumber;
let initBankAccount = {
    accountNumber: String,
    routingNumber: String,
    balance: 100000
};

do {
    console.log('=== Banking Application ===');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
    selectOptionNumber = readline.question('input selection: ');
    switch (selectOptionNumber) {
        case "1":
            accountNum = readline.question('input bank account number: ');
            findBankAccountNumber(accountNum);
            break;
        case "2":
            accountNum = readline.question('input bank account number: ');
            withdrawAmount = readline.question('input withdraw number: ');
            updateCurrentBalance(accountNum, withdrawAmount)
            break;
        default:
            break;
    }
} while (selectOptionNumber != 0 && selectOptionNumber < 3)

function updateCurrentBalance(accountNum, withdrawAmount) {
    if (accountList.has(accountNum)) {
        let resultAccount = accountList.get(accountNum);
        if (resultAccount.balance >= withdrawAmount) {
            resultAccount.balance -= withdrawAmount;
            console.log(`withdraw amount: (${withdrawAmount})`)
            console.log(`current balance: (${resultAccount.balance})`)
        } else {
            console.log(`the withdraw amount(${withdrawAmount}) > current balance (${resultAccount.balance})`)
        }
    } else {
        console.log(`the account number ${accountNum} is not existed`)
    }
}

function findBankAccountNumber(accountNumber) {
    if (accountList.has(accountNumber)) {
        let resultAccount = accountList.get(accountNumber);
        console.log(`account Number: ${resultAccount.accountNumber}, Balance: ${resultAccount.balance}`);
    } else {
        cloneNewBankAccount(accountNumber)
        return;
    }
}

function cloneNewBankAccount(newAccountNumber) {
    let newBankAccount = JSON.parse(JSON.stringify(initBankAccount));
    newBankAccount.accountNumber = newAccountNumber
    accountList.set(newBankAccount.accountNumber, newBankAccount)
    console.log("The account number is not existed, New account created:", newBankAccount.accountNumber);
}