interface AccountInterface {
  openingBalance: number;
  transactionHistory: number[];
  deposit: (amount: number) => void;
  balance: () => void;
}

export class Account implements AccountInterface {
  openingBalance: number;
  transactionHistory: number[];

  constructor(openingBalance = 0) {
    this.openingBalance = openingBalance;
    this.transactionHistory = [];
  }

  deposit(amount: number) {
    return this.transactionHistory.push(amount);
  }

  balance = () => {
    return this.transactionHistory.reduce((a, b) => a + b);
  };
}
