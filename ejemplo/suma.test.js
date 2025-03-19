//Red: Escribimos una prueba que fall
const suma = require('./suma');
test('Debe sumar 2 + 3 y obtener 5',() =>{
    expect(suma(2,3)).toBe(5);
})

