let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  document.getElementById("excuse").innerHTML =
    getRandomIndex(who) +
    " " +
    getRandomIndex(action) +
    " " +
    getRandomIndex(what) +
    " " +
    getRandomIndex(when);
}

function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("excuse").innerHTML = generateExcuse;
window.onload = generateExcuse;
