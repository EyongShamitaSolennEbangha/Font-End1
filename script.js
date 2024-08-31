let book = document.querySelector(".btn1");
let demode = document.querySelector(".stylee");
let gottt = document.querySelector(".bbt");
let btnn = document.querySelector(".popup");
let times = document.querySelector(".timess");

book.addEventListener("click", function () {
  demode.style.display = "block";
});

gottt.addEventListener("click", function () {
  btnn.style.display = "block";
});

times.addEventListener("click", function () {
  btnn.style.display = "none";
});
times.addEventListener("click", function () {
  demode.style.display = "none";
});

let show = document.querySelector(".beloww");
let second = document.querySelector(".belowww");
let last = document.querySelector(".belowwww");
let radio = document.querySelector("#showw");
let radio2 = document.querySelector("#showw2");
let radio3 = document.querySelector("#showw3");

radio.addEventListener("click", function () {
  show.style.display = "block";
});

radio2.addEventListener("click", function () {
  second.style.display = "block";
});

radio3.addEventListener("click", function () {
  last.style.display = "block";
});
