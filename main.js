//import funtion from 'funtion';
//const MediaRecorderErrorEvent = require('MediaRecorderErrorEvent');
// 1.Bucles

// 1. Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

for (let i = 4; i < 10; i++) {
  console.log(`Hola soy el num ${i} `);
}

// 2. Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
for (let i = 0; i < 18; i++) {
  if (i % 2 != 0) {
    console.log(`El num ${i} es impar`);
  } else {
    console.log(`El num ${i} es par`);
  }
}

// 3. Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
  {
    nombre: 'Jamiro',
    edad: 45,
  },
  {
    nombre: 'Juan',
    edad: 35,
  },
  {
    nombre: 'Paco',
    edad: 34,
  },
  {
    nombre: 'Pepe',
    edad: 14,
  },
  {
    nombre: 'Pilar',
    edad: 24,
  },
  {
    nombre: 'Laura',
    edad: 24,
  },
  {
    nombre: 'Jenny',
    edad: 10,
  },
];

let mayores25 = [];
for (let personas of gente) {
  if (personas.edad > 25) {
    console.log(personas.nombre);
    mayores25.push(personas.nombre);
  }
}
console.log(mayores25);

// 4. Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.

let mayores = [];
for (let personas of gente) {
  if (personas.edad > 25) {
    console.log(personas.nombre);
    mayores.push(personas.nombre);
  }
}
console.log(mayores);

// 5. Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.

let empiezaPorJ = [];

for (let personas of gente) {
  if (personas.nombre[0] === 'J') {
    empiezaPorJ.push(personas.nombre);
  }
}

console.log(empiezaPorJ);

// 6. Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

let arrayNombreCuatro = [];

for (let personas of gente) {
  if (personas.nombre.length === 4) {
    arrayNombreCuatro.push(personas.nombre);
  }
}
console.log(arrayNombreCuatro);

// 7. Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

let maduritosConJ = [];

for (let personas of gente) {
  if (personas.nombre[0] === 'J' && personas.edad < 40) {
    console.log(personas.nombre);
    maduritosConJ.push(personas.nombre);
  }
}

console.log(maduritosConJ);

/*************OBJETOS****************/

//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

// 8. TEST 1

// let ordenador = {};

// if (typeof ordenador === 'object') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

// TEST 2

// let ordenador = {
//   marca: 'La pava',
// };

// if (ordenador.marca === 'La pava') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

// TEST 3

// let ordenador = {
//   tipo: 'portátil',
// };

// if (ordenador.tipo === 'portátil') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

// TEST 4

// let ordenador = {
//   perifericos: ['mouse', 'touchPad'],
// };

// if (ordenador.perifericos[1] === 'touchPad') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

// TEST 5

// let ordenador = {
//   almacenamiento: {
//     discos: ['SSD', 'HDD'],
//   },
// };

// if (ordenador['almacenamiento']['discos'][1] === 'HDD') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

// TEST 6

let ordenador = {
  almacenamiento: {
    maestro: 0,
  },
};

if (ordenador.almacenamiento.maestro === 0) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

/********************************************************************************/
/***************TANDA 2*****************************/

/***TEST 1********/
//Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

// let obj = {};

// if (typeof obj === 'object') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/***TEST 2********/

// let obj = {
//   a: { b: false },
// };

// if (typeof obj.a.b === 'boolean') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 3********/

// let obj = {
//   a: {
//     c: [1, 2, 3],
//   },
// };

// if (typeof obj.a.c[1] === 'number') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 4********/

// let obj = {
//   d: 5,
// };

// if (typeof obj.d === 'number') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 5********/

// let obj = {
//   d: 7;
// }

// if (obj.d > 4 && obj.d < 8) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

/**********TEST 6********/

// let obj = {
//   f: 'hola',
// };

// if (typeof obj.f === 'string') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 7********/

let obj = {
  f: 'hola',
};

if (obj.f.length === 4) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

/********************************************************************************/
/***************TANDA 3*****************************/

/**********TEST 1************/

// let arr2 = [{name:'pepe}];

// if (typeof arr2 === 'object' && arr2.length >= 0) {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 2********/

// let arr = [{}, '2', true];

// if (typeof arr[0] === 'object') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/**********TEST 3********/

// let arr =['paco',{},5]

// if (typeof arr[1] === "object") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

/**********TEST 4********/

// let arr = ['5',3.14565,{}]

// if (typeof arr[2] === "object") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

/**********TEST 5********/

// let arr = [1,'ornitorrinco',true]

// if (arr.length === 3) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

/**********TEST 6********/

// let arr = [
//   {
//     name: 'paco',
//   },
//   {
//     name: 'paco',
//   },
// ];

// if (arr[0].name === arr[1].name) {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/****************TEST 6 bis********************/

// let arr3 = [
//   {
//     name: 'jueves',
//   },
//   {
//     name: 'pepito',
//   },
// ];

// if (arr3[1].name === 'pepito') {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/****************TEST 7 ***********************/

// let arr = [
//   {
//     age: 3,
//   },
//   {
//     age: 6,
//   },
//   {
//     age: 4,
//   },
// ];

// if (arr[1].age > arr[2].age) {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/****************TEST 8 ***********************/

// let arr5 = [
//   {
//     age: 25,
//   },
// ];

// if (arr5[0].age === 25) {
//   console.log('apruebas');
// } else {
//   console.log('suspendes');
// }

/****************TEST 9 ***********************/

// let arr = [
//   {
//     name:5,
//   },
//   {
//     name:true,
//   },
//   {
//     name:'Juanjo'
//   }
// ]

// if (typeof arr[2].name === "string") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

/****************TEST 10 ***********************/

let arr = [
  {
    name: 5,
  },
  {
    name: true,
  },
  {
    name: 'J',
  },
];

if (arr[2].name[0] === 'J') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

/************************FUNCIONES******************/
// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

//FUNCTION 1 - CONVIERTE STRING *****************

function convierteString(num) {
  if (typeof num === 'number') {
    return num.toString();
  } else {
    return 'Debo ser ejecutada con un número';
  }
}

convierteString(7);

console.log(convierteString(6));

// FUNCTION 2 CARACTER INICIAL *****************
// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(string) {
  if (typeof string === 'string' && string === '') {
    return 'Debo ser ejecutada con un string no vacío';
  } else if (typeof string === 'string') {
    return string[0];
  } else if (typeof string !== 'string') {
    return 'Debo ser ejecutada con un string';
  }
}

console.log(caracterInicial('jorge'));

// FUNCTION 3 ULTIMO CARACTER*********************

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(str) {
  if (typeof str === 'string' && str === '') {
    return 'Debo ser ejecutada con un string no vacío';
  } else if (typeof str === 'string') {
    return str[str.length - 1];
  } else if (typeof str !== 'string') {
    return 'Debo ser ejecutada con un string';
  }
}

console.log(ultimoCaracter('pepe'));

// FUNCTION 4 CUENTA CARACTERES ******************
// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(str) {
  if (typeof str === 'string' && str === '') {
    return 'Debo ser ejecutada con un string no vacío';
  } else if (typeof str === 'string') {
    return str.length;
  } else if (typeof str !== 'string') {
    return 'Debo ser ejecutada con un string';
  }
}

console.log(cuentaCaracteres('ornitorrinco'));

// FUNCTION 5 CIUDADES ORDENADAS **************************

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'

let arrCiudad = [];

function getCiudadesOrdenada(str) {
  if (typeof str !== 'string') {
    return 'No es un formato correcto';
  } else if (typeof str === 'string') {
    return (arrCiudad = str.split(',').sort());
  }
}

console.log(getCiudadesOrdenada(' Madrid,Valencia,Sevilla,Portugal'));

console.log(arrCiudad);

// FUNCTION 6 PALINDROMO *********************

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

//

//FUNCTION PALINDROMO

function esPalindromo(str) {
  if (typeof str !== 'string' || str === '') {
    return 'No es un formato correcto';
  } else {
    // Split -> nos convierte una cadena en un array, cogiendo como separador el espacio en blanco.
    // Reverse -> le da la vuelta al array.
    // Join --> vuelve a unir los elemenos del array que hemos creado en una cadena.
    //Por último el ternario va a evaluar si se cumple que str === strInvertida
    const strInvertida = str.split('').reverse().join('');
    return strInvertida === str
      ? ` ${str} es palindromo`
      : ` ${str} no es un palindromo`;
  }
}
console.log(esPalindromo('oso'));

// FUNCTION 7 ********* PRECIO MOSTRAR*****************

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(num) {
  if (typeof num !== 'number') {
    return 'No es un formato correcto';
  } else {
    let stringConvert = num.toString();
    return `${stringConvert}.00 € `;
  }
}

console.log(getPrecioMostrar(6));

// FUNCTION 8 ***************DIVISION***************

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division(num1, num2) {
  return num1 / num2;
}

console.log(division(6, 3));

// FUNCTION 9 ES PAR *************************

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(4));

// FUNCTION 10 ORDENAR ARRAY ******************************

// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

function ordenarArray2(arr2) {
  return arr2.sort((a, b) => b - a);
}

// console.log(ordenarArray2([1, 2, 3, -10, -14]));

//console.log([3, 8, -10, 23, 19, -4, -14, 27].sort((a, b) => b - a));

console.log(ordenarArray2([3, 8, -10, 23, 19, -4, -14, 27]));

//FUNCTION 11 *****OBTENER IMPARES****************************

// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares.

function obtenImpar(arrNum) {
  let arrImp2 = [];
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 != 0) {
      arrImp2.push(arrNum[i]);
    }
  }
  return arrImp2;
}

console.log(obtenImpar([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// FUNCTION 12 **********SUMAR ARRA********

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(arr3) {
  let suma = 0;
  for (let i = 0; i < arr3.length; i++) {
    suma = suma + arr3[i];
  }
  console.log(suma);
  return suma;
}

console.log(sumarArray([1, 2, 3, 4]));

// FUNCTION 13 **********MULTIPLICAR ARRAY********

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(array) {
  //Si ponemos 1 no influye en el resultado, si pudieramos = 0 nos daría siempre 0.
  let multi = 1;
  for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  console.log(multi);
  return multi;
}

multiplicarArray([1, 2, 3, 4]);

// FUNCTION 14 ********** ARRAY + DE 5********

// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

function mayorQueCinco(arr) {
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      arrResult.push(arr[i]);
    }
  }

  console.log(arrResult);
  return arrResult;
}

console.log(mayorQueCinco([2, 3, 4, 7, 8, 9]));

/***********FUNCTION 15*********NUMEROS PRIMOS */

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

function esPrimo(num) {
  num = prompt('Dime un numero');
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`El ${num} no es un número primo`);
    }
  }
  console.log(`El ${num} es un número primo`);
}

esPrimo();

/*********FUNCTION 16  PASSWORDS********** */

// Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

function checkPasswordcon() {
  let string = 'paco';
  for (let i = 0; i < 3; i++) {
    let pregunta = prompt('Dime una contraseña a ver si aciertas');
    if (pregunta === string) {
      alert('Enhorabuena las contraseñas coinciden');
      break;
    }
  }
}
checkPasswordcon();

/**********FUNCTION 17 CALCULADORA INVERSA************/

// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

function CalculadoraInversa(num1, num2, string) {
  switch (string) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
    case '^':
      return num1 ** num2;
      break;
    case '%':
      return num1 % num2;
      break;
  }
}

console.log(CalculadoraInversa(2, 2, '^'));

/*******************KATA'S****************/

//////////***********KATA 1 POWER*********/

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power) {
  return number ** power;
}

//////////***********KATA 2 STRING REPEAT*********

function repeatStr(n, s) {
  let string = '';
  if (typeof s === 'string') {
    for (let i = 0; i < n; i++) {
      string += s;
    }
  }
  return string;
}

//////////***********KATA 3 *Can we divide it?**************

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

//////////***********KATA 4 ABREVIATE A TWO WORD**************

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abrevName(name) {
  let arrName = name.split(' ');
  return (arrName[0][0] + '.' + arrName[1][0]).toUpperCase();
}
abrevName('Juan Jesus');

//////////***********KATA 5 CALCULATE BMI**************

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

/***********KATA 6 EASY WALLPAPER***********/
function wallpaper(l, w, h) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  return w * h * l === 0
    ? numbers[0]
    : numbers[Math.ceil((2 * (l + w) * h * 1.15) / (10 * 0.52))];
}

console.log(wallpaper(4.0, 3.5, 3.0));

/********KATA ZOMBI ATACK******* */

// I'm afraid you're in a rather unfortunate situation. You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.

// The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, and then the remaining zombies shamble forwards another 0.5 metres.

// If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, you'll also get eaten. To keep things simple, we can ignore any time spent reloading.

// Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.

// If you shoot all the zombies, return "You shot all X zombies." If you get eaten before killing all the zombies, and before running out of ammo, return "You shot X zombies before being eaten: overwhelmed." If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."

// (If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)

function zombie_shootout(zombies, range, ammo) {
  let steps = range * 2;
  if (ammo < range_per_meter && zombies > ammo) {
    return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
  } else if (zombies > steps) {
    return `You shot ${steps} zombies before being eaten: overwhelmed.`;
  } else {
    return `You shot all ${zombies} zombies.`;
  }
}
console.log(zombie_shootout(100, 8, 200));
