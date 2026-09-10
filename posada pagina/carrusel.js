'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

'use strict'

const grande2   = document.querySelector('.grande2')
const punto2     = document.querySelectorAll('.punto2')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto2.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto2[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33

        // MOVEMOS el grand
        grande2.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto2.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto2[i].classList.remove('activo2')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto2[i].classList.add('activo2')

    })
})


'use strict'

const grande3   = document.querySelector('.grande3')
const punto3    = document.querySelectorAll('.punto3')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto3.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto3[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33

        // MOVEMOS el grand
        grande3.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto3.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto3[i].classList.remove('activo3')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto3[i].classList.add('activo3')

    })
})

'use strict'

const grande4   = document.querySelector('.grande4')
const punto4     = document.querySelectorAll('.punto4')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto4.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto4[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33

        // MOVEMOS el grand
        grande4.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto4.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto4[i].classList.remove('activo4')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto4[i].classList.add('activo4')

    })
})







( condicion ) ? 'hola' : 'adiós'