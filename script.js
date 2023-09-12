class BankAccount {
    constructor(accountHolder, accountType) {
      this.accountHolder = accountHolder;
      this.accountType = accountType;
      this.balance = 0;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  const myAccount = new BankAccount("John Doe", "Savings");
  
  function performAction() {
    const action = document.getElementById("action").value;
    const amountElement = document.getElementById("amount");
    const amount = parseFloat(amountElement.value);
    const resultElement = document.getElementById("result");
  
    try {
      switch (action) {
        case "deposit":
          myAccount.deposit(amount);
          resultElement.textContent = `Deposited ${amount}. Current balance: ${myAccount.checkBalance()}`;
          break;
        case "withdraw":
          myAccount.withdraw(amount);
          resultElement.textContent = `Withdrew ${amount}. Current balance: ${myAccount.checkBalance()}`;
          break;
        case "balance":
          resultElement.textContent = `Current balance: ${myAccount.checkBalance()}`;
          break;
        default:
          resultElement.textContent = "Invalid action.";
      }
    } catch (error) {
      resultElement.textContent = `An error occurred: ${error.message}`;
    } finally {
      amountElement.value = "";
    }
  }
  