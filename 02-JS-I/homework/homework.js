// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'string';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 12;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  const suma = x + y;
  return suma;
}

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  const resta = x - y;
  return resta;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  const multiplicacion = x * y;
  return multiplicacion;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  const division = x / y;
  return division;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( x === y ) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( str1.length === str2.length ) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num < 90 ) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num > 50 ) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  const resto = x % y;
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  const resultado = Math.pow(num, 2);
  return resultado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  const resultado = Math.pow(num, 3);
  return resultado;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  const resultado = Math.pow(num, exponent);
  return resultado;
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  const redondear = Math.round(num);
  return redondear;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  const resultado = Math.ceil(num);
  return resultado;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  const cadena = str + "!";
  return cadena;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  const cadena = nombre + " " + apellido;
  return cadena;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  const cadena = "Hola " + nombre + "!";
  return cadena;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  const area = alto * ancho;
  return area;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
