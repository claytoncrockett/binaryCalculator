var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btnClr = document.getElementById("btnClr");
var btnEql = document.getElementById("btnEql");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var res = document.getElementById("res");

var left = "";
var right = "";
var operation = false;
var result = false;
var operator = "";

btnSum.onclick = () => {
  if (!operation) {
    operation = true;
    operator = "+";
  }
  res.innerHTML = left + operator + right;
};

btnSub.onclick = () => {
  if (!operation) {
    operation = true;
    operator = "-";
  }
  res.innerHTML = left + operator + right;
};

btnMul.onclick = () => {
  if (!operation) {
    operation = true;
    operator = "*";
  }
  res.innerHTML = left + operator + right;
};

btnDiv.onclick = () => {
  if (!operation) {
    operation = true;
    operator = "/";
  }
  res.innerHTML = left + operator + right;
};

btn0.onclick = () => {
  if (result === true) {
    left = res.innerHTML;
    operation = false;
    result = false;
    operator = "";
    right = "";
  }
  let x = "0";
  if (operation) {
    right += x;
  } else {
    left += x;
  }
  res.innerHTML = left + operator + right;
};

btn1.onclick = () => {
  if (result === true) {
    left = res.innerHTML;
    operation = false;
    result = false;
    operator = "";
    right = "";
  }
  let x = "1";
  if (operation) {
    right += x;
  } else {
    left += x;
  }
  res.innerHTML = left + operator + right;
};

btnClr.onclick = () => {
  res.innerHTML = "";
  left = "";
  right = "";
  operator = "";
  operation = false;
};

btnEql.onclick = () => {
  switch (operator) {
    case "+":
      var sum = getSum(left) + getSum(right);
      res.innerHTML = backToString(sum);
      break;
    case "-":
      var sum = getSum(left) - getSum(right);
      res.innerHTML = backToString(sum);
      break;
    case "/":
      var sum = Math.floor(getSum(left) / getSum(right));
      res.innerHTML = backToString(sum);
      break;
    case "*":
      var sum = getSum(left) * getSum(right);
      res.innerHTML = backToString(sum);
      break;
    default:
      break;
  }
  result = true;
};

function getSum(string) {
  var exp = 0;
  var sum = 0;
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] === "1") {
      sum += Math.pow(2, exp);
    }
    exp++;
  }
  return sum;
}

function backToString(num) {
  var arr = [];
  while (num > 0) {
    if (num % 2 === 0) arr.push(0);
    else arr.push(1);
    num = Math.floor(num / 2);
  }
  arr.reverse();
  return arr.join("");
}
