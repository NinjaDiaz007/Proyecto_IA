let dataArray = []; // Declarar un array para guardar los datos

const printCharts = ()=>{
    rendeModelsChart();
}

const rendeModelsChart = ()=>{
    const data = {
        //labels: ["azul", "dos", "tres"],
        labels: [dataArray[0], dataArray[2], dataArray[4]],
        datasets: [{
            //data: [30,50,20],
            data: [dataArray[1],dataArray[3],dataArray[5]],
            borderColor: ["#56407F", "#ED6146", "#7FB3EE"],
            backgroundColor: ["#56407F", "#ED6146", "#7FB3EE"]
        }] 
    }

    const options = {
    	plugins: {
    		legend: {position: "left"}
    	}
    }
    new Chart('graphi', {type: 'doughnut', data, options})
}
//printCharts();

// Leer datos
let upload = document.getElementById("upload");

/*function selectFile() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    //const file = event.target.result;
    const arrayText = [];*/

    /*for(let i = 0; i <= 5; i++){
    	arrayText.push(file[i]);
    }*/
    /*arrayText.push(file[0]);
    
    console.log(arrayText[0]);

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileContent = e.target.result;
            document.getElementById('fileContent').textContent = fileContent;
        };

        reader.readAsText(file);
    }
});*/



  function selectFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Obtener el primer archivo seleccionado

    if (file) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const fileContent = event.target.result; // Contenido del archivo

        for(let i = 0; i <= 5; i++){
        	// Dividir el contenido del archivo en un array por líneas (por ejemplo)
	        const lines = fileContent.split('\n');

	        // Agregar las líneas al array dataArray
	        dataArray.push(lines[i]);
        }

        // Hacer algo con el contenido del archivo o el array dataArray
        console.log(dataArray[0]);
        console.log(dataArray[1]);
        console.log(dataArray[2]);
        console.log(dataArray[3]);
        console.log(dataArray[4]);
        console.log(dataArray[5]);
        printCharts();
      };

      reader.readAsText(file);
    } else {
      //console.log('No se ha seleccionado ningún archivo.');
    }
  }