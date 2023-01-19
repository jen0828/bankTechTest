import { Transaction } from '../src/transaction';

describe(' Transaction', () => {
  it('has attributes', () => {
    let transaction = new Transaction(10000, 10000);
    expect(transaction.date).toEqual(new Date().toLocaleDateString());
    expect(transaction.amount).toEqual(10000);
    expect(transaction.currentBalance).toEqual(10000);
  });
});
