import React, {useState} from 'react';

const validarClave = (clave) => {
    const errores = [];
    if (clave.length < 8) errores.push('La contrasena debe tener al menos 8 caracteres');
    if (!/[A-Z]/.test(clave)) errores.push('una mayuscula');
    if (!/[0-9]/.test(clave)) errores.push('un numero');
    if (!/[!@#$%^&*()]/.test(clave)) errores.push('un caracter especial');

    return errores
}

export const useFormularioLogin = () => {

    const [usuario, setUsuario]=useState('');
    const [clave, setClave]= useState('');
    const [errores, setErrores]= useState({});
    const [mensaje, setMensajes]=useState('');

    const handleChange = (e) => {
        const {name, value } = e.target;
        if(name == 'usuario') setUsuario(value);
        if(name == 'clave') setClave(value);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newErrors = {};
        setMensajes('');

        if (!usuario) newErrors.usuario='usuaio requerido';
        if (!clave) {
            newErrors.clave='contrasena requerida';
        } else {
            const erroresClave = validarClave(clave);
            if (erroresClave.length > 0) newErrors.clave = erroresClave;
        }
        setErrores(newErrors);

        if (Object.keys(newErrors).length === 0){
            try{
                const respuesta = await fetch('http://localhost:3000/login',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username:usuario, password:clave})
                });

                const data = await respuesta.json();
                console.log(data)
                if(respuesta.ok){
                    setMensajes(data.token);
                }else{
                    setErrores({clave: data.error})
                }

            }catch (error){
                setMensajes({clave: 'Error de red o error de servidor'});
            }
            
        }
    };

    return {
        usuario,
        clave,
        errores,
        mensaje,
        handleChange,
        handleSubmit
    };

};