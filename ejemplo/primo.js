// // green
// function esPrimo(n){
//     if (n < 2 )return false;
//     for (let i =2; i*i <=n; i++){
//         if(n%i===0) return false;
//     }
//     return true;
// }

//Refactorizacion
function esPrimo(n){
    if(n<2 || (n%2 === 0 && n!==2)) return false;
    for(let i=3;i*i <=n; i +=2){
        if (n%i===0) return false;
    }
    return true;
}

module.exports = esPrimo;