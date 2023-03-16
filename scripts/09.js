
/**
 * Función que recibe dos arrays de números y devuelve un array con aquellos numeros coincidentes, sin duplicados
 * @param {Number[]} arrNum1 
 * @param {Number[]} arrNum2 
 * @returns {Number[]}
 */
const commonNumbers = (arrNum1, arrNum2 ) => {

    let arrComun = [];
    
    /*
    // Esta opción genera el array con duplicados
    let arrComun = arrNum1.filter( num1 => {
        return arrNum2.includes(num1);
    })
    */
   
    arrNum1.map( num1 => {
       if (arrNum2.find( num2 => num1 === num2)){
            if (!arrComun.find ( comun => comun === num1 )) arrComun.push(num1);
       }
    });

    return arrComun.sort();
}

console.log(commonNumbers([5, 4, 6, 7, 7], [7, 8, 9, 7, 5]))