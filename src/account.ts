export class Account {
  openingBalance: number;
  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
  }

  deposit(amount: number) {
    return amount;
  }
}
