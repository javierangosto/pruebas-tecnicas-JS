
/**
 * Función que recibe una cadena de texto e indica si es un texto palindromo o no (que se lee igual de izquierda-> derecha que de derecha->izquierda)
 * @param {String} text 
 * @returns {Boolean} res
 */
const isPalindrome = ( text ) => {
    if (text === text.split('').reverse().join('')) return true;
    return false;
};

console.log(isPalindrome('otto'));
console.log(isPalindrome('Javier'));