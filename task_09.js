//  ______________________Bank Account Management______________________________________

// Problem: A bank needs to manage customer accounts, including account number, holder name, balance, and methods for deposit and withdrawal.

const bankAccount = {
 accountNumber: '123456789',
 holderName: 'John Doe',
 balance: 5000,
 deposit: function (amount) {
  this.balance += amount;
  console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
 },
 withdraw: function (amount) {
  if (amount > this.balance) {
   console.log('Insufficient funds');
  } else {
   this.balance -= amount;
   console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
  }
 }
};

bankAccount.deposit(1500); // Output: Deposited: $1500. New Balance: $6500
bankAccount.withdraw(2000); // Output: Withdrew: $2000. New Balance: $4500
bankAccount.withdraw(2000); // Output: Withdrew: $2000. New Balance: $4500
bankAccount.withdraw(2000); // Output: Withdrew: $2000. New Balance: $4500
bankAccount.withdraw(2000); // Output: Withdrew: $2000. New Balance: $4500
