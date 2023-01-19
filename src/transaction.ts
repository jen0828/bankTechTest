export class Transaction {
  date: string;
  amount: number;
  currentBalance: number;
  constructor(amount, currentBalance) {
    this.date = new Date().toLocaleDateString();
    this.amount = amount;
    this.currentBalance = currentBalance;
  }
}
