//Business Logic
function BankAccount(userName, accountNumber, balance) {
  this.userName = userName;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.balance = function() {
  return balance;
}

BankAccount.prototype.deposit = function() {
  return balance += deposit;
}

BankAccount.prototype.withdrawal = function() {
  return balance -= withdrawal;
}

var numberGenerator = 0

//User Logic
$(function(){
  $("#new-account").submit(function(event){
    var newAccountName = $("#new-account-name").val();
    var newAccountDeposit = $("#initial-deposit").val();
    var newAccountNumber =
      (numberGenerator += 1);
    var account = new BankAccount(newAccountName,newAccountNumber, newAccountDeposit);

    console.log(account);
    event.preventDefault();
  });
  $("#deposit-withdrawal").submit(function(event){
    var deposit = $("#deposit").val();
    var withdrawal = $("#withdrawal").val();
    event.preventDefault();
  });
});
