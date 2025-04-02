const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const USERS = [
    {
        username: "usuario1",
        password: bcrypt.hashSync("Password@123", 10)
    }
];

//Funcion para validar la seguridad de la contraseña
const isPasswordSecure = (password) => {
    if (password.length < 8){
        return 'la contraseña debe incluir al menos 8 caracteres.';
    }

    if (!/[A-Z]/.test(password)){
        return 'la contraseña debe incluir al menos una letra mayuscula.';
    }

    if (!/[0-9]/.test(password)){
        return 'la contraseña debe incluir al menos un numero.';
    }

    if (!/[@$!%*?&]/.test(password)){
        return 'la contraseña debe incluir al menos un caracter especial.';
    }

    return null;
}

const authenticateUser = (username, password) => {
    const user = USERS.find(u => u.username === username);

    if (!user) return null;

    //Validar la seguridad de la contrasena
    const validationError = isPasswordSecure(password);

    if (validationError) return validationError;

    if(!bcrypt.compareSync(password, user.password)){
        return 'Credenciales invalidas'
    }

    return token = jwt.sign({
            username: user.username
            },
            'secreto', {
                expiresIn: '1h'
            }
        );
    

}

module.exports = {authenticateUser, isPasswordSecure};