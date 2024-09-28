import CheckingAccount from "./CheckAccount";
import SavingAccount from "./SavingAccount";

let savingAccount: SavingAccount = new SavingAccount();
let checkingAccount: CheckingAccount = new CheckingAccount();

savingAccount.deposit(100);
console.log(`current balance: ${savingAccount.getBalance()}`)
let currentBalance = savingAccount.withDraw(90)
console.log(`current balance: ${currentBalance}`)