/*.Escribe un programa que invierta una cadena usando recursión Dada la cadena "freeCodeCamp", 
el programa debería devolver "pmaCedoCeerf". 


function orden(palabra) {
  if (palabra === "") {
    return "";
  }else{
    return reverse(palabra.substr(1)) + str.charAt(0); 
  } 
}

console.log(orden("El grupo web 2 es el mejor"))*/

/*2. Escribe un programa que devuelva el número de veces que aparece 
una letra en una cadena. Tu programa debería recibir una cadena y la letra.


//Intento 1
function programa(orden, letra) {
  let suma = 0;
  if (orden.length > 0) {
    if (orden[0] == letra) {
    suma++;  
    }
    return suma + programa (orden(1), letra)
  }
  else{
    return suma;
  }
}*/

/*
//Intento 2
function programa(orden, letra) {
  let incremental = 0; 
  for (let i = 0; i < orden.length; i++) {
    if (orden[i] === letra) {
      incremental ++; 
    }
  }
  return incremental;
}*/

/*3.Escriba un programa que reciba una frase y este debe de intercambiar 
las vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”
*/
/*function orden(palabra) {
  console.log(palabra);
  if (palabra.lenght === 0) {
    return "";
  }
  if (palabra[0] === "u" || palabra[0] === "o" || palabra[0] === "e"|| palabra[0] === "a") {
    return "i" + orden(palabra.slice(1));
  }
  return palabra[0] + (orden(palabra.slice(1))); 
}

console.log(orden("Palabras"));
console.log(orden("Juntas"));
console.log(orden("Lindas"));*/



/*4. Escriba un programa que reciba una palabra y reordene sus letras en orden 
alfabético. Ej. hola → ahlo */