const express = require('express');
const cors = require('cors');
const { authenticateUser } = require('./auth');
const { isPasswordSecure } = require('./passwordValidator')
require('dotenv').config();

const app = express();
app.use((cors()));
app.use(express.json());

app.post('/login', (req, res)=>{
    const {username, password}= req.body;

    // validar la seguridad de la contrasena antes de autenticar
    const validationError = isPasswordSecure(password);

    if(validationError){
        return res.status(400).json({error: validationError});
    }

    const token = authenticateUser(username, password);
    if (token === 'Credenciales invalidas'){
        return res.status(401).json({error: token});
    }

    res.json({token});
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port`);
});

module.exports = app;