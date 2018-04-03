//Business Logic
var bankAccountArray = [];

function BankAccount(userName, accountNumber, balance) {
  this.userName = userName;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.balance = function() {
  return this.balance;
}

BankAccount.prototype.deposit = function(number) {
  return this.balance += number;
}

BankAccount.prototype.withdrawal = function(number) {
  return this.balance -= number;
}

var numberGenerator = 0

function depositWithdraw(accountId, deposit, withdrawal) {
  bankAccountArray.forEach(function(account){
    if (account.accountNumber === accountId) {
      console.log("test");
      account.deposit(deposit);
      account.withdrawal(withdrawal);
    }
  });
}

//User Logic
$(function(){
  $("#new-account").submit(function(event){
    var newAccountName = $("#new-account-name").val();
    var newAccountDeposit = parseInt($("#initial-deposit").val());
    var newAccountNumber =
      (numberGenerator += 1);
    var account = new BankAccount(newAccountName,newAccountNumber, newAccountDeposit);
    bankAccountArray.push(account);
/////////////////
    $("#account-number").text(newAccountNumber);
    $("#current-balance").text(newAccountDeposit);
    $(".no-display").show();
    event.preventDefault();
  });


/////////
  $("#deposit-withdrawal").submit(function(event){
    var accountNumberInput = parseInt($("#account-number-input").val());
    var userDeposit = parseInt($("#deposit").val());
    var userWithdrawal = parseInt($("#withdrawal").val());
    depositWithdraw(accountNumberInput, userDeposit, userWithdrawal);
    console.log(bankAccountArray);
    $("#current-balance").text(this.balance);
    $(".no-display").show();
    event.preventDefault();
  });
});
