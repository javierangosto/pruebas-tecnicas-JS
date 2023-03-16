
/**
 * Función que recibiendo un número devuelve su tabla de multiplicar
 * @param {Number} multiplier 
 * @returns {String}
 */
const multiplicationTable = ( multiplier ) => {
    const cab = `# Tabla del ${multiplier} #\n`;
    let res = '';

    for (let i = 1; i <= 10; i++) {
        res += `${i} X ${multiplier} = ${i*multiplier}\n` ;
    }

    return cab + res;
}

console.log(multiplicationTable(5));