
/**
 * ¿Cuánto es el X% de X? Función que recibe un porcentaje y un número, y contesta a la pregunta anterior con el resultado.
 * @param {Number} percentatge 
 * @param {Number} number 
 * @returns {String} result
 */
const percentageNumber  =  ( percentatge, number ) => {
    return `El ${ percentatge }% de ${ number } es ${ ((percentatge * number) / 100).toFixed(2) }` ;
}

console.log(percentageNumber(12, 429));
console.log(percentageNumber(43, 897));