let btn_switch = document.getElementById("switch");
let body = document.querySelector("body");

btn_switch.addEventListener('click',()=>{
    if(btn_switch.checked === true){
        body.classList.toggle("oscuro");
		body.classList.toggle("claro");
    }
    else{
        body.classList.toggle("oscuro");
		body.classList.toggle("claro");
    }

    if(!body.classList.contains("oscuro")){
    	return localStorage.setItem("Modo", "claro");
    }
    else{
    	return localStorage.setItem("Modo", "oscuro");
    }

});

function Local_Storage() {
	/*if (typeof(Storage) !== "undefined") {
	    alert("LocalStorage disponible")
	} else {
	    alert("LocalStorage no soportado en este navegador")
	}*/
	let GetMode = localStorage.getItem("Modo");

	if(GetMode && GetMode === "oscuro"){
    	body.classList.toggle("oscuro");
    	body.classList.toggle("claro");
    	btn_switch.checked = true;
    }
}
Local_Storage();
