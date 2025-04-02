const express = require('express');
const {authenticateUser, isPasswordSecure} = require('./auth');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/login', (req, res)=>{
    const {username, password}= req.body;

    // validar la seguridad de la contrasena antes de autenticar
    const validationError = isPasswordSecure(password);

    if(validationError){
        return res.status(400).json({error: validationError});
    }

    const token = authenticateUser(username, password);
    if (token == 'Credenciales invalidas'){
        return res.status(401).json({error: token});
    }

    res.json({token});
});

module.exports = app;