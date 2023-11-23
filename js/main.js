let cont_preguntas = document.getElementById("cont-preguntas");
let siguiente = document.getElementById("siguiente");
let anterior = document.getElementById("anterior");
let finality = document.getElementById("finality");
let card = document.getElementById("card");
let reboot = document.getElementById("reboot");

let slider = document.querySelector(".slide");
let sliderIndividual = document.querySelectorAll(".slider");
let contador = 1;
let ancho = sliderIndividual[0].clientWidth;

let preguntas = [
    "¿Te gustan las matemáticas?",
    "¿Disfrutas resolviendo problemas de programación?",
    "¿Eres bueno/a en ciencias?",
    "¿Te interesan las artes visuales?",
    "¿Disfrutas trabajando con personas?",
    "¿Prefieres trabajar en equipo o individualmente?",
    "¿Te sientes atraído por la idea de analizar datos y tomar decisiones importantes para una organización?",
     "¿Disfrutas de la creatividad y la planificación para diseñar proyectos o resolver problemas?",
     "¿Eres bueno en el manejo de números y la interpretación de datos financieros?",
     "¿Sientes curiosidad por comprender cómo funcionan los procesos biológicos a nivel molecular?",
     "¿Te interesa la aplicación de la tecnología para mejorar la vida de las personas?",
     "¿Eres bueno en la resolución de problemas técnicos y mecánicos?",
     "¿Te atrae la idea de trabajar con circuitos electrónicos y sistemas de comunicación?",
     "¿Eres un amante de la tecnología y disfrutas programando o trabajando en desarrollo de software?",
     "¿Te interesa el manejo de sistemas de información y la seguridad informática?",
     "¿Eres bueno en la optimización de procesos y la mejora de la eficiencia?",
     "¿Disfrutas del trabajo en laboratorios y la investigación científica?",
     "¿Te preocupa la sostenibilidad y el impacto ambiental de las actividades humanas?",
     "¿Tienes habilidades para el diseño y la planificación de proyectos a gran escala?",
     "¿Eres bueno en la gestión de recursos y presupuestos?",
     "¿Te atrae la idea de diseñar y supervisar la construcción de estructuras físicas?",
     "¿Eres bueno en el análisis de materiales y estructuras?",
     "¿Tienes interés en el diseño y operación de procesos químicos?",
     "¿Disfrutas de la programación y el diseño de sistemas de software?",
     "¿Te sientes cómodo trabajando en equipo y liderando proyectos?",
     "¿Eres bueno en el análisis de costos y presupuestos?",
     "¿Te preocupa la ética y la integridad en el trabajo?",
     "¿Eres hábil en la gestión de proyectos y equipos?",
     "¿Te interesa el diseño y la planificación de espacios y edificios?",
     "¿Disfrutas de la investigación y el desarrollo en ciencias biológicas?",
     "¿Eres bueno en el diseño y optimización de procesos químicos y biológicos?",
     "¿Te preocupas por la seguridad y la regulación en la industria química y biotecnológica?",
     "¿Eres hábil en la integración de sistemas eléctricos y mecánicos?",
     "¿Te sientes atraído por la electrónica y el diseño de circuitos?",
     "¿Eres bueno en la resolución de problemas algorítmicos y el desarrollo de software?",
     "¿Tienes interés en la gestión empresarial y la toma de decisiones basadas en datos?",
     "¿Te atrae la idea de trabajar en la gestión de recursos humanos y financieros de una empresa?",
     "¿Eres bueno en la planificación estratégica y el desarrollo organizacional?",
     "¿Disfrutas analizando el mercado y desarrollando estrategias de marketing?",
     "¿Sientes una inclinación natural hacia el liderazgo y la gestión de equipos?",
     "¿Te ves resolviendo problemas empresariales de manera efectiva en el futuro?",
     "¿Tienes interés en conocer la legislación comercial y laboral?",
     "¿Valoras la importancia de la comunicación efectiva en la gestión empresarial?",
     "¿Te ves aplicando principios éticos en tu carrera profesional?",
     "¿Tienes habilidades para diseñar espacios y edificios de manera creativa?",
     "¿Eres hábil en el uso de software de modelado arquitectónico?",
     "¿Te interesa aprender sobre diversos estilos arquitectónicos?",
     "¿Valoras la sostenibilidad en la planificación urbana?",
     "¿Sientes curiosidad por los materiales de construcción y las tecnologías modernas?",
     "¿Te ves trabajando en el cumplimiento de regulaciones y normativas de construcción?",
     "¿Eres capaz de combinar estética y funcionalidad en tus diseños?",
     "¿Tienes un fuerte sentido de responsabilidad en la supervisión de proyectos?",
     "¿Te atrae la idea de evaluar el impacto ambiental de tus proyectos?",
     "¿Eres bueno en la gestión de recursos y presupuestos de construcción?",
     "¿Disfrutas de la ingeniería electromecánica y la integración de sistemas?",
     "¿Sientes una pasión por el diseño y mantenimiento de equipos industriales?"
    ];

// Eventos por Click
siguiente.addEventListener("click", ()=>{
    if(contador < sliderIndividual.length){
		slider.style.transform = "translate("+(-ancho*contador)+"px)";
	    slider.style.transition = "transform .8s";
        contador++;
	}
});
anterior.addEventListener('click', ()=>{
	if(contador > 0){
		contador--;
		slider.style.transform = "translate("+(-ancho*contador)+"px)";
	    slider.style.transition = "transform .8s";
	}
});
finality.addEventListener('click', ()=>{
    card.style.left = "50%";
});

reboot.addEventListener('click', ()=>{
    location.reload();
})

// Funciones
function PreguntasPantalla(){
    let i;
    let texto = document.querySelectorAll(".txt");
    
    for(i = 0; i <= preguntas.length-1; i++){
        texto[i].innerHTML = preguntas[i];
        //console.log(`Pregunta: ${preguntas[i]}`);
    }
}
PreguntasPantalla();

function Cerrar_Modal(){
    card.style.left = "-50%";
}