// 1. push: Agrega uno o mas elementos al final de un array
let instrumentos = ["guitarra", "piano"];
instrumentos.push("bateria", "violin");
console.log(instrumentos); // --> ["guitarra", "piano", "bateria", "violin"]

// 2. pop: Elimina el ultimo elemento de un array y lo devuelve
let ultimoInstrumento = instrumentos.pop();
console.log(ultimoInstrumento); // "violin"
console.log(instrumentos); // --> ["guitarra", "piano", "bateria"]

// 3. shift: Elimina el primer elemento de un array y lo devuelve
let primerInstrumento = instrumentos.shift();
console.log(primerInstrumento); // "guitarra"
console.log(instrumentos); // --> ["piano", "bateria"]

// 4. unshift: Agrega uno o mas elementos al inicio de un array
instrumentos.unshift("saxofon", "trompeta");
console.log(instrumentos); // --> ["saxofon", "trompeta", "piano", "bateria"]

// 5. concat: Une dos o mas arrays y devuelve un nuevo array
let percusion = ["congas", "timbales"];
let conjunto = instrumentos.concat(percusion);
console.log(conjunto); // --> ["saxofon", "trompeta", "piano", "bateria", "congas", "timbales"]

// 6. slice: Devuelve una parte del array en un nuevo array
let algunosInstrumentos = instrumentos.slice(1, 3);
console.log(algunosInstrumentos); // --> ["trompeta", "piano"]

// 7. splice: Cambia el contenido de un array eliminando, reemplazando o agregando nuevos elementos
instrumentos.splice(2, 0, "flauta", "clarinete");
console.log(instrumentos); // --> ["saxofon", "trompeta", "flauta", "clarinete", "piano", "bateria"]

// 8. indexOf: Devuelve el primer indice en el que se encuentra un elemento, o -1 si no se encuentra
let indicePiano = instrumentos.indexOf("piano");
console.log(indicePiano); // --> 4

// 9. find: Devuelve el primer elemento que cumple con la condicion especificada
let instrumentoLargo = instrumentos.find(instrumento => instrumento.length > 8);
console.log(instrumentoLargo); // --> "clarinete"

// 10. filter( Devuelve un nuevo array con todos los elementos que cumplen con la condicion especificada
let instrumentosCortos = instrumentos.filter(instrumento => instrumento.length <= 6);
console.log(instrumentosCortos); // --> ["flauta", "piano"]

// 11. map: Crea un nuevo array con los resultados de aplicar una funcion a cada elemento
let instrumentosMayus = instrumentos.map(instrumento => instrumento.toUpperCase());
console.log(instrumentosMayus); // --> ["SAXOFON", "TROMPETA", "FLAUTA", "CLARINETE", "PIANO", "BATERIA"]

// 12. reduce: Aplica una funcion a un acumulador y a cada valor del array para reducirlo a un unico valor
let totalLetras = instrumentos.reduce((acumulador, instrumento) => acumulador + instrumento.length, 0);
console.log(totalLetras); // --> 41

// 13. sort: Ordena los elementos del array y devuelve el array ordenado
instrumentos.sort();
console.log(instrumentos); // --> ["bateria", "clarinete", "flauta", "piano", "saxofon", "trompeta"]

// 14. reverse: Invierte el orden de los elementos del array
instrumentos.reverse();
console.log(instrumentos); // --> ["trompeta", "saxofon", "piano", "flauta", "clarinete", "bateria"]

// 15. includes: Determina si un array contiene un elemento especifico
let contienePiano = instrumentos.includes("piano");
console.log(contienePiano); // --> true

// 16. join: Une todos los elementos de un array en una cadena, separandolos por un separador especifico
let cadenaInstrumentos = instrumentos.join(" - ");
console.log(cadenaInstrumentos); // --> "trompeta - saxofon - piano - flauta - clarinete - bateria"

// 17. forEach: Ejecuta una funcion en cada elemento del array
instrumentos.forEach(instrumento => console.log(instrumento));

// 18. some: Comprueba si al menos un elemento en el array cumple con la condicion
let hayInstrumentoLargo = instrumentos.some(instrumento => instrumento.length > 8);
console.log(hayInstrumentoLargo); // --> true

// 19. every: Comprueba si todos los elementos en el array cumplen con la condicion
let todosCortos = instrumentos.every(instrumento => instrumento.length <= 8);
console.log(todosCortos); // --> false

// 20. findIndex: Devuelve el indice del primer elemento que cumple con la condicion, o -1 si no se encuentra
let indiceSaxofon = instrumentos.findIndex(instrumento => instrumento === "saxofon");
console.log(indiceSaxofon); // --> 1

// 21. flat: Aplana arrays anidados en un solo nivel
let secciones = [["cuerdas", "violin"], ["viento", "flauta"]];
let aplanado = secciones.flat();
console.log(aplanado); // --> ["cuerdas", "violin", "viento", "flauta"]

// 22. flatMap: Aplica una funcion a cada elemento y aplana el resultado en un nuevo array
let mapeoAplanado = instrumentos.flatMap(instrumento => [instrumento, instrumento.length]);
console.log(mapeoAplanado); // --> ["trompeta", 8, "saxofon", 7, "piano", 5, "flauta", 6, "clarinete", 9, "bateria", 7]

// 23. fill: Llena todos los elementos de un array con un valor estatco desde el indice de inicio hasta el final
instrumentos.fill("tambor", 1, 3);
console.log(instrumentos); // --> ["trompeta", "tambor", "tambor", "flauta", "clarinete", "bateria"]

// 24. from: Crea una nueva instancia de Array a partir de un objeto iterable
let letrasInstrumento = Array.from("Xilofono");
console.log(letrasInstrumento); // --> ["X", "i", "l", "o", "f", "o", "n", "o"]

// 25. isArray: Verifica si un valor es un array
let esArray = Array.isArray(instrumentos);
console.log(esArray); // --> true