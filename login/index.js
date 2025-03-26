const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
app.use(express.json());

const USERS = [
    { username: "usuario1", password: bcrypt.hashSync("password123", 10)}
];

app.post('/login', async(req, res) =>{
    const { username, password } = req.body;
    const user = USERS.find(u => u.username === username);

    if(!user || !bcrypt.compareSync(password, user.password)){
        return res.status(401).json({
            error: "Credenciales inválidas"
        });
    }

    const token = jwt.sign({
        username: user.username
        },
        'secreto', {
            expiresIn: '1h'
        }
    );
    res.json({token});

});

module.exports = app;
