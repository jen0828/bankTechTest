import { Account } from '../src/account';

describe('class Account', () => {
  let account = new Account();
  it('should have 0 balance for a new account', () => {
    expect(account.openingBalance).toBe(0);
  });
});
