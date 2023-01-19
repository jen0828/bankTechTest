import { Itransaction, Transaction } from './transaction';

export class Account {
  openingBalance: number;
  transactionHistory: Itransaction[];
  overdraftLimit: number;

  constructor(openingBalance = 0, overdraftLimit = 100) {
    this.openingBalance = openingBalance;
    this.transactionHistory = [];
    this.overdraftLimit = overdraftLimit;
  }

  deposit(amount: number): number {
    return this.transactionHistory.push(
      new Transaction(amount, amount + this.balance())
    );
  }

  withdraw(amount: number) {
    if (amount < 0) {
      throw new Error('Invalid amount - Cannot withdraw amount less than £0');
    } else if (amount > this.balance() + this.overdraftLimit) {
      throw new Error('Insufficient funds');
    }
    let withdrawal = -amount;
    return this.transactionHistory.push(
      new Transaction(withdrawal, this.balance() + withdrawal)
    );
  }

  balance = () => {
    return this.transactionHistory
      .map((transaction) => transaction.amount)
      .reduce((a, b) => a + b, 0);
  };
}
