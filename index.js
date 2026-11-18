let checkSum = prompt('What is the check sum?');
let tipSize = prompt('What is the tip percentage?');

if (!(checkSum && tipSize)) {
  alert('Cancelled');
} else if (
  isNaN(checkSum) ||
  isNaN(tipSize) ||
  checkSum <= 0 ||
  tipSize > 100 ||
  tipSize < 0
) {
  alert('Invalid input data');
} else {
  checkSum = Number(checkSum);
  tipSize = Number(tipSize);
  const tipPercentage = tipSize * 0.01;
  let tip = checkSum * tipPercentage;
  tip = Number(tip.toFixed(2));
  let total = checkSum + tip;
  total = total.toFixed(2);
  alert(`Check sum: ${checkSum}

Tip: ${tipSize}%

Tip amount: ${tip}

Total sum to pay: ${total}`);
}
