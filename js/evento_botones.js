let enviar = document.getElementById("enviar");
let card2 = document.getElementById("card-2")
let cont = 1;

let Lista_Respuesta = new Array();

enviar.addEventListener('click', ()=>{
    guardarArchivoDeTexto(Lista_Respuesta, "informacion.txt");
    Cerrar_Modal();
    card2.style.left = "50%";
});

// Botones que son "si"
function Precion_SI(argument) {
	Lista_Respuesta.push(argument+". Si");
}

// Botones que son "no"
function Precion_NO(argument) {
	Lista_Respuesta.push(argument+". No");
}
