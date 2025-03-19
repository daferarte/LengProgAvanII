//Green: Implementar la funcion minima necesaria
// function suma(a, b){
//     return a+b;
// }

// module.exports = suma;

// Refactor: mejorar el codigo si es necesario
function suma(a, b){
    if( typeof a !=='number' || typeof b !== 'number'){
        throw new Error('Los parametros deben ser numeros');
    }
    return a+b
}

module.exports = suma;