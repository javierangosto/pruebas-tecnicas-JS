
/**
 * Función que recibe una palabra y devuelve la misma palabra al revés, sin usar métodos propios de JS
 * @param {String} word 
 * @returns {String} Palabra invertida
 */
const reverseWord = ( word ) => {
    let reverseW = ''
    for (let letter in word){
        reverseW = word[letter] + reverseW;
    }

    return reverseW;
}

console.log(reverseWord('curso'));