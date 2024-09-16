/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Un otaku",
    "Hulk",
    "Homero Simpson",
    "Un aliems",
    "Michael Jackson",
    "El profe"
  ];
  let action = [
    "tiró R en",
    "aplastó",
    "saltó sobre",
    "hackeó",
    "vomitó en",
    "explotó"
  ];
  let what = [
    "mi tarea",
    "mi consola",
    "una canoa",
    "la mesa",
    "mis conocimientos",
    "el codigo"
  ];
  let when = [
    "durante la misa",
    "mientras bailaba con Cristian",
    "en la mañana",
    "mientras estudiaba",
    "mientras jugaba LOL con Samuel",
    "mientras tomaba mate con Ceci"
  ];

  function getRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let excusa = `
  ${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}
`;

  console.log(excusa);
  document.getElementById("excuse").innerHTML = excusa;
};
