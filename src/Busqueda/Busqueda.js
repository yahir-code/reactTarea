import React from "react";
import { ContactoContext } from "./../Context/contactoProvider";
import "./Busqueda.css";

function Busqueda (props){
    let {ValorBusqueda, setValorBusqueda} = React.useContext(ContactoContext);
    function actualizaTexto(event){
        console.log(event.target.value);  
        setValorBusqueda(event.target.value);  
       
    }
    return(
        <div className="contenido"> 
            <input onChange={actualizaTexto}
                value={ValorBusqueda}>
            </input>
        </div>

    );
}

export default Busqueda;
