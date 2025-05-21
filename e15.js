// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array.La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro.Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (arrays, a, b) => {
  [arrays[a], arrays[b]] = [arrays[b], arrays[a]];
  return arrays
}

console.log(swap(fantasticFour, 3, 1));




// const lista = ["emoji", "corazon", "yalgo"];

// const [primerLugar, , tercerLugar] = lista; 

// console.log(primerLugar);
// console.log(tercerLugar);

