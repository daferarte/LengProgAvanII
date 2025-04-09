import React, {useState} from 'react';

function FormularioLogin(){
    const [usuario, setUsuario]=useState('');
    const [clave, setClave]= useState('');
    const [errores, setErrores]= useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!usuario) newErrors.usuario='usuaio requerido';
        if (!clave) newErrors.clave='contrasena requerida';
        setErrores(newErrors);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Usuario'
                value={usuario}
                onChange={(e)=> setUsuario(e.target.value)}
            />
            {errores.usuario && <p>{errores.usuario}</p>}

            <input
                type='password'
                placeholder='Contrasena'
                value={clave}
                onChange={(e)=> setClave(e.target.value)}
            />
            {errores.clave && <p>{errores.clave}</p>}

            <button type='submit'>Iniciar sesion</button>
        </form>
    );
}

export default FormularioLogin;