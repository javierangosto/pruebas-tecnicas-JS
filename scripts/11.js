// ** CONSTANTES ** //
const censhorship = '[-CENSURADO-]'; //Dibujo del escalón a usar en la función

/**
 * Función que recibe una frase y una palabra, y devuelve la misma frase con la palabra censurada
 * @param {String} phrase 
 * @param {String} word 
 * @returns {String}
 */
const censhorshipPhrase = ( phrase, word ) => {
    if (!phrase || !word) throw new Error ('Phrase and word are mandatory');
    return phrase.replaceAll(word, censhorship);

    /*
    Otra opción, usar RegExp:
    return phrase.replace(new RegExp(word, 'gi'), censhorship);
    */
}

console.log(censhorshipPhrase('Ya es tarde, no es de día', 'es'));