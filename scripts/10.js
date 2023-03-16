// ** CONSTANTES ** //
const step = '[-]'; //Dibujo del escalón a usar en la función

/**
 * Función que recibe un numero indicando el nivel de altura de las escaleras que pinta y devuelve en el string
 * @param {Number} levels 
 * @returns {String}
 */
const paintStairs = ( levels ) => {
    let stair = '';

    for (let i = 1; i <= levels; i++) {
        for (let j = 0; j < i; j++) {
            stair += step;
        }        
        stair += '\n';
    }

    return stair;
}

console.log(paintStairs(4));
