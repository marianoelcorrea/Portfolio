// Funcion que aplica estilo a la opcion selccionada en el menu
function seleccionar(link) {
  let opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";

  // Desaparece el menu una vez seleccionado una opcion en el modo responsive
  let x = document.getElementById("nav");
  x.className = "";
}

// Funcion que muestra el menu responsive
function responsiveMenu() {
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// Se detecta el scrolling para aplicar la animacion en las barras de habilidades

window.onscroll = function () {
  efectoHabilidades();
};

function efectoHabilidades() {
  let skills = document.getElementById("skilss");
  let distancia_skills = window.innerHeight - skills;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barraProgreso1");
    document.getElementById("css").classList.add("barraProgreso2");
    document.getElementById("js").classList.add("barraProgreso3");
    document.getElementById("react").classList.add("barraProgreso4");
    document.getElementById("bootstrap").classList.add("barraProgreso5");
    document.getElementById("node").classList.add("barraProgreso6");
    document.getElementById("express").classList.add("barraProgreso7");
    document.getElementById("baseDatos").classList.add("barraProgreso8");
  }
}
