# Test Vocacional
Se estara realizando el dise&#241;o para una pagina web para un test vocacional que se estara usando los lenguages de programaci&#243;n _**HTML, CSS y JavaScript**_. En las siguientes verciones que se a&#241;adier&#243;n o se eliminaron ciertos elementos en la paguina pero se anunciaran a continuaci&#243;n que se realizo en cada verci&#243;n.

## Verción 1.0
- Se puso un gif como un hero de imagenes.
- Se coloco un menu de navegacion(Pendiente).

![](./img/hero.png)

## Verci&#243;n 1.1
- Se estilizo el formato de las preguntas.
- Boton para el modo oscuro.

![](./img/pantalla1.png)

## Verci&#243;n 1.2
- Mostrar las preguntas por medio de un arreglo.
- Se estilizo los botones de siguiente y anterior (Pendiente).
- Se a&#241;adi&#243; un nuevo boton para guardar (Pendiente).

### El c&#243;digo siguiente es la forma en c&#243;mo se estar&#225; desplegando las preguntas en la pantalla.

```javascript
function PreguntasPantalla(){
    let i;
    let texto = document.querySelectorAll(".txt");
    
    for(i = 0; i <= preguntas.length; i++){
        texto[i].innerHTML = preguntas[i];
        //console.log(`Pregunta: ${preguntas[i]}`);
    }
}
PreguntasPantalla();
```

# Verci&#243;n 2
- Se a&#241;adio un carrusel para mostrar las preguntas (en bloques de 10 preguntas).
- Se a&#241;adio un boton para guardar el contenido de las preguntas (Pendiente).
- Se elimino la preguntas opci&#243;nes.
- Funcionalidad a los botones (siguiente y anterio).

# Verci&#243;n 2.1
- Se actualizo el codigo para generar el documento.
```javascript
const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}
```
- El menu de navegaci&#243;n (Funcionando).
- El boton para guardar (Funcionando).

# Vercion 2.2
- El boton para guardar el contenido de las preguntas (Funcionando).
