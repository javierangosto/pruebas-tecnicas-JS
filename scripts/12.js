
/**
 * Función que recibe un número por parámetro y imprime una cuenta atrás de 8 en 8 números.
 * @param {Number} num 
 * @returns {String}
 */
const countdownFrom8to8 = ( num ) => {
    let countdown = `--- Del ${ num } al 0 ---\n`;

    while (num >= 0){
        countdown+= `- nº${ num }\n`;
        num -= 8;
    }
    
    return countdown;
}

console.log(countdownFrom8to8(100));