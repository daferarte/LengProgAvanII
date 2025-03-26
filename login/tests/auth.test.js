const request = require('supertest');
const app = require('../index');

describe('Post /login', () =>{
    test('Debe devolver un token cuando las credenciales son correctas', async ()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "password123"
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    test('Debe fallar si las credenciales son incorrectas', async ()=>{
        const response = await request(app).post('/login').send({
            username: "usuario1",
            password: "wrongpassword"
        });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error','Credenciales inválidas');
    });


});