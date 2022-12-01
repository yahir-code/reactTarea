import React from "react";

function Contacto(props){
     
    function miFuncion(){
        props.borrarAmigo();
    }
    return(
       <div className="TodosDatos">
        <h2 className="datoNombre">{props.nombre}</h2>
        <p className="Datos">
        {props.telefono} - {props.correo}
        </p>
        <button onClick={miFuncion} className="Eliminar">Eliminar</button>
       </div>
    );
}


export default Contacto;