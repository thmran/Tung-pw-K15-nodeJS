export default abstract class BankAccount {

    protected balance: number;
    protected minBalance: number;


    abstract deposit(amount: number);
    abstract getBalance(): number;
    abstract withDraw(amount: number);

    protected _withDraw(amount: number, errorMsg: string): number {
        let draftBalanceAmount = this.balance - amount;
        if (draftBalanceAmount < this.minBalance) {
            throw new Error("Checking account should have balance > 50")
        }

        this.balance = this.balance - amount;
        return this.balance;

    };
}