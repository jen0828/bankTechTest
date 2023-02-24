import { Itransaction, Transaction } from './transaction';
import Statement from './statement';

export class Account {
  private _openingBalance: number;
  private _transactionHistory: Itransaction[];
  private _overdraftLimit: number;

  constructor(openingBalance = 0, overdraftLimit = 100) {
    this._openingBalance = openingBalance;
    this._transactionHistory = [];
    this._overdraftLimit = overdraftLimit;
  }

  get openingBalance(): number {
    return this._openingBalance;
  }

  get transactionHistory(): Itransaction[] {
    return this._transactionHistory;
  }

  deposit(amount: number): number {
    const newTransaction = new Transaction(amount, amount + this.balance());
    this._transactionHistory.push(newTransaction);
    return this._transactionHistory.length;
  }

  withdraw(amount: number) {
    this._withdrawChecks(amount);

    const withdrawal = -amount;
    const newTransaction = new Transaction(
      withdrawal,
      this.balance() + withdrawal
    );
    this._transactionHistory.push(newTransaction);
    return this._transactionHistory.length;
  }

  get balance(): () => number {
    return () =>
      this._transactionHistory
        .map((transaction) => transaction.amount)
        .reduce((a, b) => a + b, 0);
  }

  viewStatement = () => {
    const statement = new Statement();
    return statement.printStatement(this._transactionHistory);
  };

  private _withdrawChecks = (amount: number) => {
    if (amount < 0) {
      throw new Error('Invalid amount - Cannot withdraw amount less than £0');
    } else if (amount > this.balance() + this._overdraftLimit) {
      throw new Error('Insufficient funds');
    }
  };
}
