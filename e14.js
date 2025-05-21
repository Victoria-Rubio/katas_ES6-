// Crea una función llamada rollDice() que reciba como parametro el numero de caras 
// que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado 
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
// preocupes! Busca información sobre la función de javascript Math.random()

const rollDice = (numCaras) => {
  const numeroAleatorio = Math.random();
  const numeroEscalado = numeroAleatorio * numCaras;
  const numeroEntero = Math.floor(numeroEscalado);
  const resultadoDado = numeroEntero + 1;

  return resultadoDado;
}

console.log("Tirada 1:", rollDice(20));
console.log("Tirada 2:", rollDice(12));
console.log("Tirada 3:", rollDice(56));
console.log("Tirada 4:", rollDice(47));
console.log("Tirada 5:", rollDice(6));


