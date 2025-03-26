const express = require('express');
const {authenticateUser} = require('./auth');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/login', async(req, res) =>{

    const { username, password } = req.body;
    const token = authenticateUser(username, password);

    if (!token) {
        return res.status(401).json({
            error: "Credenciales inválidas"
        });
    }
    
    res.json({token});

});

module.exports = app;
