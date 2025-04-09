import {render, screen, fireEvent} from '@testing-library/react';
import Boton from './Boton';

test('Debe mostrar "Haz clic y luego gracias"', () => {
    render (<Boton/>);

    // Al inicio
    expect(screen.getByText('Haz clic')).toBeInTheDocument();

    // Simular el clic 
    fireEvent.click(screen.getByText('Haz clic'));

    // Despues del clic
    expect(screen.getByText('Gracias')).toBeInTheDocument();
});