//Business Logic
var bankAccountArray = [];
var numberGenerator = 0

function BankAccount(userName, accountNumber, balance) {
  this.userName = userName;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(number) {
  return this.balance += number;
}

BankAccount.prototype.withdrawal = function(number) {
  if (this.balance >= number) {
    return this.balance -= number;
  } else {
    $("#no-money").show();
  }
}

function depositWithdraw(accountId, deposit, withdrawal) {
  bankAccountArray.forEach(function(account){
    if (account.accountNumber === accountId) {
      account.deposit(deposit);
      account.withdrawal(withdrawal);
    }
  });
}

//User Logic
$(function(){
  //New Account Form
  $("#new-account").submit(function(event){
    var newAccountName = $("#new-account-name").val();
    var newAccountDeposit = parseInt($("#initial-deposit").val());
    var newAccountNumber =
      (numberGenerator += 1);
    var account = new BankAccount(newAccountName,newAccountNumber, newAccountDeposit);
    bankAccountArray.push(account);
    $("#account-number").text(newAccountNumber);
    $("#current-balance").text(newAccountDeposit);
    $(".no-display").show();
    event.preventDefault();
  });
  // Deposit/Withdraw Form
  $("#deposit-withdrawal").submit(function(event){
    $("#no-money").hide();
    var accountNumberInput = parseInt($("#account-number-input").val());
    var userDeposit = parseInt($("#deposit").val());
    var userWithdrawal = parseInt($("#withdrawal").val());
    depositWithdraw(accountNumberInput, userDeposit, userWithdrawal);
    bankAccountArray.forEach(function(account){
      if (account.accountNumber === accountNumberInput) {
        $("#current-balance").text(account.balance);
      }
    });
    $(".no-display").show();
    event.preventDefault();
  });
});
