console.log(document.querySelector("h1"));
console.log(document.querySelector("p"));
console.log(document.querySelector("#text"));
console.log(document.querySelector(".paragraph"));

console.log(document.getElementById("text"));

const h1 = document.querySelector("h1");
const p = document.getElementById("text");

console.log(h1.textContent);
h1.textContent = "hello"

p.textContent = "get"
console.log(p.textContent);