/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  refresh();
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generate(kind, ending) {
  let domain =
    kind +
    "<b>" +
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)];

  return domain + ending + "</b>";
}

function refresh() {
  const elem = document.getElementById("domain");
  elem.innerHTML = generate("A commercial domain ", ".org");
  const elem1 = document.getElementById("domain1");
  elem1.innerHTML = generate("A network technology domain ", ".com");
  const elem2 = document.getElementById("domain2");
  elem2.innerHTML = generate("An educational domain ", ".edu");
}

const elem = document.getElementById("btnGenerate");
elem.addEventListener("click", refresh);
