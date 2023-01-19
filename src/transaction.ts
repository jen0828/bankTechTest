export interface Itransaction {
  date: string;
  amount: number;
  currentBalance: number;
}

export class Transaction implements Itransaction {
  date: string;
  amount: number;
  currentBalance: number;
  constructor(amount: number, currentBalance: number) {
    this.date = new Date().toLocaleDateString();
    this.amount = amount;
    this.currentBalance = currentBalance;
  }
}
