/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Generacion de carta aleatoria cuando se acutliza la pagina.
window.onload = function() {
  //Crear arrays con los valores de la carta
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let icons = ["♦", "♥", "♠", "♣"];

  //Crear los numeros aleatorios para seleccionar los valores
  const randomValueNum = Math.floor(Math.random() * numbers.length);
  const randomValueIcons = Math.floor(Math.random() * icons.length);

  //Extraccion de los elementos HTML
  let numero = document.getElementById("numero");
  let iconoSuperior = document.getElementById("icono-superior");
  let iconoInferior = document.getElementById("icono-inferior");

  //Asignacion de color negro a los iconos que lo requieren
  if (icons[randomValueIcons] == "♠" || icons[randomValueIcons] == "♣") {
    iconoSuperior.style.color = "black";
    iconoInferior.style.color = "black";
  } else {
    iconoSuperior.style.color = "red";
    iconoInferior.style.color = "red";
  }

  //Asignacion de valores aleatorios
  numero.innerHTML = numbers[randomValueNum];
  iconoSuperior.innerHTML = icons[randomValueIcons];
  iconoInferior.innerHTML = icons[randomValueIcons];
};

//Generacion de carta aleatoria al presionar el boton.
let botonGenerar = document.getElementById("boton-generar");
botonGenerar.addEventListener("click", () => {
  window.onload();
});
