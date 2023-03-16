
/**
 * Función que recibe como parámetro un texto y un número de veces, y devuelve ese texto repetido el número de veces que indica la variable
 * @param {String} txt 
 * @param {Number} repeats 
 * @returns {String}
 */
const repeatMe = ( txt, repeats) => {
    return txt.repeat(repeats);
}

console.log(repeatMe('esto es una prueba ', 3));