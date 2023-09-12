## Overview
This project is a simple web-based application that simulates basic bank account operations like depositing money, withdrawing money, and checking the account balance. This project showcases the use of JavaScript classes, switch statements, and try-catch-finally blocks.

## How To Use
Open index.html in your preferred web browser.
Use the dropdown menu to select an action: Deposit, Withdraw, or Check Balance.
If depositing or withdrawing, input the amount you wish to deposit or withdraw.
Click on the "Execute" button to perform the action.
## Code Structure
## HTML (index.html)
The HTML file contains the interface for the application. This includes the dropdown for selecting an action and an input box for entering an amount for deposit or withdrawal.

## JavaScript (script.js)
## BankAccount Class
The BankAccount class contains properties for the account holder, account type, and balance. It also has methods for depositing, withdrawing, and checking the balance.

class BankAccount {
  constructor(accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    this.balance = 0;
  }
  ...
}
## Switch Statement
The switch statement is used to determine the action to be performed based on the user's selection (Deposit, Withdraw, or Check Balance).

switch (action) {
  case "deposit":
    ...
    break;
  ...
}
## Try-Catch-Finally
The try-catch-finally block is used to handle exceptions. For example, if a user tries to withdraw more than the available balance, an error message is displayed.

try {
  ...
} catch (error) {
  ...
} finally {
  ...
}
