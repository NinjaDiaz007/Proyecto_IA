# Test Vocacional
Se estara realizando el diseño para una pagina web para un test vocacional que se estara usando los lenguages de programacion _**HTML, CSS y JavaScript**_.

## Se añadió como nuevos en la verción 1.0
- Se puso un gif como un hero de imagenes.
- Se coloco un menu de navegacion(Pendiente).

![](./img/hero.png)

## Se añadió como nuevos en la verción 1.1
- Se estilizo el formato de las preguntas.
- Boton para el modo oscuro.

![](./img/pantalla1.png)

## Se añadió como nuevos en la verción 1.2
- Mostrar las preguntas por medio de un arreglo.
- Se estilizo los botones de siguiente y anterior.
- Se añadió un nuevo boton para guardar (No funciona).

### El código siguiente es la forma en cómo se estará desplegando las preguntas en la pantalla.

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