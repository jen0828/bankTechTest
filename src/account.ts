interface AccountInterface {
  openingBalance: number;
  transactionHistory: number[];
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
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

  withdraw(amount: number) {
    if (amount < 0) {
      throw new Error('Invalid amount - Cannot withdraw amount less than £0');
    } else if (amount > this.balance()) {
      throw new Error('Insufficient funds');
    }
    return this.transactionHistory.push(-amount);
  }

  balance = () => {
    return this.transactionHistory.reduce((a, b) => a + b);
  };
}
