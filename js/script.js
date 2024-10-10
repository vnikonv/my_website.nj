document.getElementById("burger2").addEventListener("click", function() {
  document.querySelector(".navbar").classList.toggle("open")
})

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");

let first = document.getElementById("first");
let second = document.getElementById("second");
let variable = document.getElementById("variable");

const result = document.getElementById("result");
const val = document.getElementById("value")

function calculus(mark) {
  const num1 = parseFloat(first.value) || 0;
  const num2 = parseFloat(second.value) || 0;
  let res = 0;
  switch(mark) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num2 !== 0 ? num1 / num2 : "error";
      break;
  }
  result.textContent = res;
}

function trig(f) {
  const deg = parseFloat(variable.value) * (Math.PI / 180) || 0;
  let temp = 0;
  switch(f) {
    case "cos":
      temp = Math.cos(deg);
      break;
    case "sin":
      temp = Math.sin(deg);
      break;
    case "tg":
      temp = (deg % Math.PI) === (Math.PI/2) ? "error" : Math.tan(deg);
      break;
    case "ctg":
      temp = (deg % Math.PI) === 0 ? "error" : 1 / (Math.tan(deg));
      break;
  }
  typeof temp == 'number' ? val.textContent = temp.toFixed(2) : val.textContent = temp;
}

plus.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("+");
});

minus.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("-");
});

mult.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("*");
});

div.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("/");
});

cos.addEventListener("click", (event) => {
  event.preventDefault();
  trig("cos");
});

sin.addEventListener("click", (event) => {
  event.preventDefault();
  trig("sin");
});

tg.addEventListener("click", (event) => {
  event.preventDefault();
  trig("tg");
});

ctg.addEventListener("click", (event) => {
  event.preventDefault();
  trig("ctg");
});