const request = require('supertest');
const app = require('../index');

describe('Post /login',()=>{
    test('Debe devolver un token cuando las credenciales son correctas', async()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password@123"
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    test('Debe fallar si la contraseña no tiene mayusculas', async()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "password@123"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'la contraseña debe incluir al menos una letra mayuscula.');

    });

    test('Debe fallar si la contraseña no tiene caracteres especiales', async()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password123"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'la contraseña debe incluir al menos un caracter especial.');
        
    });

    test('Debe fallar si la contraseña no tiene numeros', async()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "Password@"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'la contraseña debe incluir al menos un numero.');
        
    });

    test('Debe fallar si la contraseña es menor a 8 caracteres', async()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "P@ss1"
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error', 'la contraseña debe incluir al menos 8 caracteres.');
        
    });

});