// Funcion que aplica estilo a la opcion selccionada en el menu
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a');
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
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}