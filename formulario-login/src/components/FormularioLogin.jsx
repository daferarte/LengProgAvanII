import React, {useState} from 'react';
import { useFormularioLogin } from '../hooks/useFormularioLogin';



function FormularioLogin(){
    
    const {
        usuario,
        clave,
        errores,
        mensaje,
        handleChange,
        handleSubmit
    } = useFormularioLogin();

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type='text'
                    name='usuario'
                    placeholder='Usuario'
                    value={usuario}
                    onChange={handleChange}
                />
                {errores.usuario && <p>{errores.usuario}</p>}
            </div>
            <div>
                <input
                    type='password'
                    name='clave'
                    placeholder='Contrasena'
                    value={clave}
                    onChange={handleChange}
                />

                {Array.isArray(errores.clave)
                ? errores.clave.map((err, i) => <p key={i}>{err}</p>)
                : errores.clave && <p>{errores.clave}</p> }
            </div>
            <button type='submit'>Iniciar sesion</button>

            {mensaje && <p>{mensaje}</p>}
        </form>
    );
}

export default FormularioLogin;