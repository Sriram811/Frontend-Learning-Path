function add() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  //  get the value in ParseInt and avoid Concatenation
  var add = parseInt(num1) + parseInt(num2);
  document.getElementById("output").innerHTML = add;
}

function sub() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var subr = num1 - num2;
  document.getElementById("output").innerHTML = subr;
}

function multi() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var mult = num1 * num2;
  document.getElementById("output").innerHTML = mult;
}

function div() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  var div = num1/num2;
  document.getElementById("output").innerHTML = div;
}