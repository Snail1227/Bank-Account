// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  let leastBalanceClients = [];
  let leastBalance = Infinity;
  
  for (let account of array) {
    if (account.balance > 0 && account.balance <= leastBalance) {
      if (account.balance < leastBalance) {
        leastBalanceClients = [];
        leastBalance = account.balance;
      }
      leastBalanceClients.push({ name: account.name, balance: account.balance, ...account });
    }
  }
  
  return leastBalanceClients;
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
