const esPrimo = require('./primo');

test('Debe retornar true para 7', () => {
    expect(esPrimo(7)).toBe(true);
})

test('Debe retornar false para 8', () => {
    expect(esPrimo(8)).toBe(false);

})

test('Debe retornar false para numeros menores a 2', () => {
    expect(esPrimo(1)).toBe(false);
})