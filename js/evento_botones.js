let btn_si_1 = document.getElementById("btn-si-1");

let btn_no_1 = document.getElementById("btn-no-1");

let descargar = document.getElementById("descargar");
let cont = 1;

let Lista_Respuesta = new Array();

descargar.addEventListener('click', () => {
    guardarArchivoDeTexto(Lista_Respuesta, "informacion.txt");
});

// Botones que son "si"
function Precion_SI(argument) {
	Lista_Respuesta.push(argument+". Si");
	console.log(Lista_Respuesta[argument]);
}

// Botones que son "no"
function Precion_NO(argument) {
	Lista_Respuesta.push(argument+". No");
	console.log(Lista_Respuesta[argument]);
}
