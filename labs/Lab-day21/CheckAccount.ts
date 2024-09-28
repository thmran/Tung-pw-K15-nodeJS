import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {
    constructor() {
        super();
        this.minBalance = 50;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }

    withDraw(amount: number): number {
        const errMsg = "Checking account should have balance > 50";
        return this._withDraw(amount, errMsg);
    }


}