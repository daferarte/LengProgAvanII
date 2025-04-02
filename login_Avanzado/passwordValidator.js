//Funcion para validar la seguridad de la contraseña
const isPasswordSecure = (password) => {
    if (password.length < 8) return 'la contraseña debe incluir al menos 8 caracteres.';
    if (!/[A-Z]/.test(password)) return 'la contraseña debe incluir al menos una letra mayuscula.';
    if (!/[0-9]/.test(password)) return 'la contraseña debe incluir al menos un numero.';
    if (!/[@$!%*?&]/.test(password)) return 'la contraseña debe incluir al menos un caracter especial.';
    return null;
}

module.exports = { isPasswordSecure };