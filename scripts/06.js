// ** CONSTANTES ** //
const character = '*'; //Caracter que se usa para imprimir el cuadrado;
const space = ' ';

/**
 * Función que mediante una longitud, devuelve un string con el cuadrado pintado vacío por dentro.
 * @param {Numer} size: longitud del tamaño en caracteres
 * @returns {String}
 */
const drawSquare = ( size ) => {
    let content = '';

    for (let i = 1; i < size-1; i++) {
        content += `${ paintLineSquare(size) }\n`;        
    }

    return paintUpDownSquare(size) + content + paintUpDownSquare(size);

}

/**
 * Función que devuelve la parte superior/inferior del cuadrado
 * @param {Number} size 
 * @returns {String}
 */
const paintUpDownSquare = ( size ) => {
    let border = '';
    for (let i = 0; i < size; i++) {
        border += character;        
    }
    
    return `${border}\n`;
}

/**
 * Función que devuelve una linea del medio del cuadrado
 * @param {Number} size 
 * @returns {String}
 */
const paintLineSquare = ( size ) => {
    let line = '';
    for (let i = 1; i < size-1; i++) {
        line += space;        
    }

    return character + line + character;
}

console.log(drawSquare(4));