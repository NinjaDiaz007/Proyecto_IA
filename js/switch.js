let switchh = document.getElementById("switch");
let body = document.getElementById("body");

switchh.addEventListener('click',()=>{
    if(switchh.checked === true){
        body.classList.add("oscuro");
        body.classList.remove("claro");
    }
    else{
        body.classList.remove("oscuro");
        body.classList.add("claro");
    }
});
