var principal = 0;
var interestRate = 0;
var termOfLoan = 0;
var amount = 0;

function calculate() {
  var plan = document.getElementById("name").value;
  switch (plan) {
    case "safelock":
      simpleInterest();
    case "piggy-bank":
      compoundInterest();
    case "flex":
      compoundInterest();
    case "target":
      compoundInterest();
    default:
      break;
  }

  // if (plan == "safelock"){
  // }
}

function simpleInterest() {
  event.preventDefault();
  var principal = parseFloat(document.getElementById("principal").value);
  var simpleInt;
  var amount;
  var prd = parseFloat(document.getElementById("period").value);
  var term = prd / 365;

  if (prd >= 7 && prd <= 30) {
    var interestRate = 0.06;
    simpleInt = principal * interestRate * term;
    amount = (principal + simpleInt).toFixed(2);
  }
  if (prd >= 31 && prd <= 60) {
    var interestRate = 0.08;
    simpleInt = principal * interestRate * term;
    amount = (principal + simpleInt).toFixed(2);
  }
  if (prd >= 61 && prd <= 90) {
    var interestRate = 0.1;
    simpleInt = principal * interestRate * term;
    amount = (principal + simpleInt).toFixed(2);
  }
  if (prd >= 91 && prd <= 2 * 365) {
    var interestRate = 0.13;
    simpleInt = principal * interestRate * term;
    amount = (principal + simpleInt).toFixed(2);
  }
  if (prd > 2 * 365) {
    var interestRate = 0.31;
    simpleInt = principal * interestRate * term;
    amount = (principal + simpleInt).toFixed(2);
  }
  document.getElementById("siOutput-01").innerHTML =
    "Flat Interest: NGN" + simpleInt.toFixed(2);
  document.getElementById("siOutput-02").innerHTML =
    "Total plus interest: NGN" + amount;
}

function compoundInterest() {
  event.preventDefault();
  var principal = parseFloat(document.getElementById("principal").value);
  var prd = parseFloat(document.getElementById("period").value);
  var interestRate = 0.1;
  //   interestRate = interestRate / 365;

  var a = interestRate / 365;
  var b = 1 + a;
  var c = Math.pow(b, prd);
  var amount = (principal * c).toFixed(2);

  document.getElementById("siOutput-01").innerHTML =
    "Interest: NGN" + (amount - principal).toFixed(2);
  document.getElementById("siOutput-02").innerHTML =
    "Total plus interest: NGN" + amount;
}

function getPrincipal() {
  event.preventDefault();
  const msToDays = 8.64e7;
  var apprxMnth = 365 / 12;
  var amount = parseFloat(document.getElementById("total").value);
  var now = new Date();
  var date = document.getElementById("time").value;
  var targetDate = new Date(date);
  var elapsedTime = targetDate.getTime() - now.getTime();
  var elapsedDays = elapsedTime / msToDays;

  var interestRate = 0.1;
  var a = interestRate / 365;
  var b = 1 + a;
  var c = Math.pow(b, elapsedDays);
  var dPrincipal = ((amount / (c))/elapsedDays).toFixed(2);
  var mPrincipal;
  if (elapsedDays > 30) {
    mPrincipal = dPrincipal * apprxMnth;
  } else {
    mPrincipal = amount;
  }  

  document.getElementById("iOutput-01").innerHTML =
    "You will need to save:" + "NGN" + dPrincipal + "daily.";
  document.getElementById("iOutput-02").innerHTML =
    "You will need to save:" + "NGN" + mPrincipal.toFixed(2) + "monthly.";
}
