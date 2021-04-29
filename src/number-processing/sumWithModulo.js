// find the sum of 2 number with modulo 34321232342

//will use distributive property of modullo
const Modulo_Number = 34321232342;

function sumWithModulo(num1, num2) {
  return ((num1 % Modulo_Number) + (num2 % Modulo_Number)) % Modulo_Number;
}



console.log(sumWithModulo(672312344323454323454323432, 675645435464543345564564543));