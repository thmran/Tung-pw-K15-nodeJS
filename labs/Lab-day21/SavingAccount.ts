import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount {

    /**
     *
     */
    constructor() {
        super();
        this.minBalance = 0;
    };

    deposit(amount: number) {
        throw new Error("Method not implemented.");
    };
    getBalance(): number {
        throw new Error("Method not implemented.");
    };

    withDraw(amount: number): number {
        const errMsg = "saving account should not be negative!";
        return this._withDraw(amount, errMsg);
    };


}