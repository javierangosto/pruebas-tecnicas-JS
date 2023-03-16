
/**
 * Función que recibe un array y un numero, y devuelve el array segmentado en arrays del numero pasado por parametro
 * @param {Number[]} array 
 * @param {Number} parts 
 * @returns {String[]}
 */
const arrayPartition = ( array, parts ) => {
    let arraySliced = []
    let tempArray = []
    let limit = 0;    

    for ( element of array ){    
        tempArray.push(element);
        limit++;

        if (limit === parts) {
            arraySliced.push(tempArray);
            tempArray = [];
            limit = 0;
        }
    }

    if ( tempArray.length != 0 ) arraySliced.push(tempArray);
    
    return arraySliced;
}

console.log(arrayPartition([7, 8, 9, 10, 5, 1, 2, 3, 4, 5, 6, 7, 8], 2));