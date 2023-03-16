
/**
 * Función que recibe dos números y devuelve cuantos números impares existen entre ellos dos.
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number}
 */
const countOddBetweenNumbers = ( num1, num2 ) => {
    let count = 0;

        for (let i = num1+1; i < num2; i++) {
        count += i % 2 === 0 ? 1 : 0;
    }

    return count;
}

console.log(countOddBetweenNumbers(1, 100));
console.log(countOddBetweenNumbers(1, 10));