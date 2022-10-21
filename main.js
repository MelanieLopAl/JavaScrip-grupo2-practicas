/*1. Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor. (Valor: 5pts) 

let array = [8, 4, 6, 10, 30]; 
let mayor= 0; 

for (let i = 0; i < array.length; i++) {
  if (mayor < array[i]) {
    mayor = array[i]
    }
}
*/

/*2. Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for . (Valor: 5pts) 

let palabra; 

function palindromo(palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra.split('').reverse().join('') == palabra) {
      console.log('True');
    } else if (palabra.split('').reverse().join('') != palabra) {
      console.log('False');
    }
  }
}
  console.log(palindromo ('reconocer'));*/

/*3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for (Valor: 10pts) 

function numbers() {
  
}

let matriz = [ 
    [1,0,0], 
    [0,1,1], 
    [0,1,0] ]; 

let newMatriz = [];*/


/*4. Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for. (Valor: 10pts) */

/*5. Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema. (Valor: 15pts) 

for (let i = 0; i <= 8; i++) {
  let asterisco = ' ' + ' ';
    for (let y = 0; y <i; y++) {
      asterisco += '*';
  }
  console.log(asterisco);
} */