import { Account } from '../src/account';

describe('class Account', () => {
  let account = new Account();
  it('should have 0 balance for a new account', () => {
    expect(account.openingBalance).toBe(0);
  });

  describe('#deposite', () => {
    it('can save a deposit into an array of transactions', () => {
      account.deposit(1000);
      expect(account.transactionHistory).toContain(1000);
    });
  });
});
