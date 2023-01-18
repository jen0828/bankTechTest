export class Account {
  openingBalance: number;
  transactionHistory: number[];
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = [];
  }

  deposit(amount: number) {
    return this.transactionHistory.push(amount);
  }
}
