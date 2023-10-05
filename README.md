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

# Verci&#243;n 1.3
- Se a&#241;adio un carrusel para mostrar las preguntas;
- Se a&#241;adio un boton(Pendiente)
- Se elimino la preguntas opci&#243;nes.
- Funcionalidad a los botones (siguiente y anterio).