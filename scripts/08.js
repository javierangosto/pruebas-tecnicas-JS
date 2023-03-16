
/**
 * Función que a partir de un numero entero devuelve ese numero entero al revés
 * @param {Number} num 
 * @returns {Number}
 */
const reverseNumber = ( num ) => {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseNumber(-1412));