var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
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

  //   var timesCompounded = parseFloat(document.getElementById("timesCompounded").value);
  var a = interestRate / 365;
  var b = 1 + a;
  var c = Math.pow(b, prd);
  var amount = (principal * c).toFixed(2);

  document.getElementById("siOutput-01").innerHTML =
    "Interest: NGN" + (amount - principal).toFixed(2);
  document.getElementById("siOutput-02").innerHTML =
    "Total plus interest: NGN" + amount;
}
