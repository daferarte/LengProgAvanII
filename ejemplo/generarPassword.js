// green
function generarPassword(longitud){
    if(longitud < 6){
        throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = '';
    for(let i=0; i<longitud;i++){
        password+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    return password;
}

module.exports = generarPassword;