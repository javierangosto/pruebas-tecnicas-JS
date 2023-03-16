
/**
 * Función que recibe una frase y una palabra y devuelve la cantidad de veces que existe esa palabra en la frase
 * @param {String} phrase 
 * @param {String} word 
 */
const wordCounter = ( phrase, word ) => {
    let nWord = 0;
    phrase.toLowerCase().replace(/[!¡¿?.,-]/gi, '').split(' ').map( w => w === word ? nWord++ : 0);
    return nWord;
}

console.log(wordCounter('¡hola! buenos ¿hola? hola, días, hola que tal, hola.', 'hola'));