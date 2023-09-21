let testv = document.getElementById("testv");
let test = document.getElementById("test");
let blockm = document.getElementById("blockm");
let block = document.getElementById("block");

testv.addEventListener("click", ()=>{
    test.classList.remove("none");
    block.classList.add("none");
    testv.classList.add("activo");
    blockm.classList.remove("activo")
});

blockm.addEventListener("click", ()=>{
    block.classList.remove("none");
    test.classList.add("none");
    blockm.classList.add("activo");
    testv.classList.remove("activo");
})