import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormularioLogin from '../components/FormularioLogin';

test ('muestra mensaje de error si los campos estan vacios', () =>{
    render(<FormularioLogin />);

    const boton = screen.getByRole('button', {name: /Iniciar sesion/i});
    fireEvent.click(boton);

    expect(screen.getByText(/usuaio requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/contrasena requerida/i)).toBeInTheDocument();
});

test('muestre error si la contrasena no cumple con requisitos', ()=>{
    render(<FormularioLogin />);

    const inputUsuario = screen.getByPlaceholderText(/Usuario/i);
    const inputClave = screen.getByPlaceholderText(/Contrasena/i);
    const boton = screen.getByRole('button', {name: /Iniciar sesion/i});

    fireEvent.change(inputUsuario, { target: { value: 'daniel'}});
    fireEvent.change(inputClave, { target: { value: 'abc'}}); //debil

    fireEvent.click(boton);

    expect(screen.getByText(/La contrasena debe tener al menos 8 caracteres/i)).toBeInTheDocument();
    expect(screen.getByText(/una mayuscula/i)).toBeInTheDocument();
    expect(screen.getByText(/un numero/i)).toBeInTheDocument();
    expect(screen.getByText(/un caracter especial/i)).toBeInTheDocument();

});