import { Account } from '../src/account';

test('can meet the specifications and print the correct results on a array', () => {
  let account = new Account();
  const statmentSpy = jest.spyOn(console, 'log');
  account.deposit(909298.88);
  account.withdraw(4563.77);
  console.log(account.viewStatement());
  expect(statmentSpy).toHaveBeenCalledWith(
    `date    ||  credit  ||  debit  || balance\n${new Date().toLocaleDateString()} ||  || 4563.77 || 904735.11\n${new Date().toLocaleDateString()} || 909298.88 ||  || 909298.88`
  );
});
