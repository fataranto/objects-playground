/**
 * Vamos a explorar los diferentes objetos presentes en este DOM.
 * Muchos de  los ejemplos de cómo hacer lo que se pide los tienes aquí: https://www.w3schools.com/js/js_ex_dom.asp
 * 
 */

/**
 * Ejercicio 1. (ya resuelto). Escribe por el terminal el valor del atributo 'alt' de la <img class="header--logo">
 */

// recuperamos el objeto del DOM identificado con este selector CSS. Accedemos a su propiedad .alt; que es la variable que almacena la información sobre el atributo 'alt' del tag HTML. 

let altLogo = document.querySelector(".header--logo").alt;
//console.log("El atributo alt de la imagen es: ", altLogo);

/**
 * Ejercicio 2. Escribe por el terminal el atributo .src de la misma imagen anterior.
 * Es decir, deberíamos ver por el terminal el valor "./img/logo.webp"
 * 
 */
 let srcLogo = document.querySelector(".header--logo").src;
 //console.log("El atributo src de la imagen es: ", srcLogo);
/**
 * Ejercicio 3. Escribe por el terminal el valor en pixeles de la altura de la imagen del mismo logo. Deberías obtener el valor 100.
 * 
 */
 let heightImg = document.querySelector(".header--logo").height;
 console.log("La altura de la imagen es: ", heightImg);

/**
 * Ejercicio 4. Muestra por el terminal el valor del atributo .href del enlace del footer. Deberíamos ver por el terminal : "https://www.progatslagarriga.com"
 */

/**
 * Ejercicio 5. Han actualizado el lema de la ONG por el texto. Actualiza la propiedad .textContent del texto "¡un hogar para cada gatito!" por el valor de la variable 'nuevoLema'
 */
let nuevoLema = "¡Los humanos bonitos adoptan gatitos!";

/**
 * Ejercicio 6. Verónica ha pasado de ser Voluntaria a Trabajadora. Cambia el texto de su cargo usando JavaScript. Puedes modificar el HTML. Bonus: cambia el texto sin modificar el HTML
 */

//
let nuevoCargo = document.querySelector(".card__veronica > p");
nuevoCargo.textContent = "Trabajadora";
/**
 * Ejercicio 7 (BONUS). Muestra por el terminal el nombre de todos los enlaces del menú de navegación. Es decir debería mostrarse por el terminal: "equipo" , "servicios", "contacto". Pista: usa el selector querySelectorAll y un bucle para iterar entre todos los elementos del array. 
 */

