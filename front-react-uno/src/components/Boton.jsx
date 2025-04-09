import React, { useState } from "react";

function Boton(){
    const [texto, setTexto] = useState('Haz clic');

    return(
        <button onClick={()=>setTexto('Gracias')}>
            {texto}
        </button>
    );
}

export default Boton;