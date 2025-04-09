import React, { render, screen, fireEvent } from '@testing-library/react';
import FormularioLogin from './FormularioLogin';

test ('muestra mensaje de error si los campos estan vacios', () =>{
    render(<FormularioLogin />);

    const boton = screen.getByRole('button', {name: /Iniciar sesion/i});
    fireEvent.click(boton);

    expect(screen.getByText(/usuaio requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/contrasena requerida/i)).toBeInTheDocument();
});