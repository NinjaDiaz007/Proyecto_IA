let enviar = document.getElementById("enviar");
let cont = 1;

let Lista_Respuesta = new Array();

enviar.addEventListener('click', ()=>{
    if(contador === 6){
        contador = 1;
        slider.style.transform = "translate("+(-ancho*contador)+"px)";
        slider.style.transition = "transform .8s";
        card.style.left = "-50%"
        guardarArchivoDeTexto(Lista_Respuesta, "informacion.txt");
        Lista_Respuesta.length = [];
        console.log(Lista_Respuesta(0));
    }
    
});

// Botones que son "si"
function Precion_SI(argument) {
	Lista_Respuesta.push(argument+". Si");
}

// Botones que son "no"
function Precion_NO(argument) {
	Lista_Respuesta.push(argument+". No");
}
