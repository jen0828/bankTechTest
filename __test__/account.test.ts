import { Account } from '../src/account';

describe('class Account', () => {
  let account = new Account();

  it('should have 0 balance for a new account', () => {
    expect(account.openingBalance).toBe(0);
  });

  describe('#deposit', () => {
    it('can save a deposit into an array of transactions', () => {
      account.deposit(1000);
      expect(account.transactionHistory[0].currentBalance).toEqual(1000);
    });
  });

  describe('#balance', () => {
    it('can show current balance', () => {
      let account = new Account();
      account.deposit(1000);
      expect(account.balance()).toEqual(1000);
    });
  });

  describe('#withdraw', () => {
    it('can withdraw money from the account', () => {
      let account = new Account();
      account.deposit(1000);
      account.withdraw(500);
      expect(account.balance()).toEqual(500);
    });
  });

  it('cannot withdraw an amount less than 0', () => {
    expect(() => {
      account.withdraw(-100);
    }).toThrow('Invalid amount - Cannot withdraw amount less than £0');
  });

  it('cannot withdraw if amount is greater than overdraft', () => {
    let account = new Account();
    account.deposit(5000);
    expect(() => {
      account.withdraw(5200);
    }).toThrow('Insufficient funds');
  });
});
