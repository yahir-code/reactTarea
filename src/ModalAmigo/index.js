import React from "react";
import './ModalAmigo.css'
import {ContactoContext} from "./../Context/contactoProvider";

function ModalAmigo(){
    let {setModal , agregarAmigo} = React.useContext(ContactoContext)
    let[amigui, setAmigui] = React.useState({
        nombre: "",
        correo: "",
        telefono: ""
    });
    const modalCancelar=(event)=>{
        event.preventDefault();
        setModal(false);
    }
    const modalGuardar=(event)=>{
        event.preventDefault();
        agregarAmigo(amigui);
        setModal(false);   
        }
const onchangeNombre=(event)=>{
    let amiguiTemporal = amigui;
    amiguiTemporal.nombre = event.target.value;
    setAmigui(amiguiTemporal);
}
const onchangeTelefono=(event)=>{
    let amiguiTemporal = amigui;
    amiguiTemporal.telefono = event.target.value;
    setAmigui(amiguiTemporal);
}
const onchangeCorreo=(event)=>{
    let amiguiTemporal = amigui;
    amiguiTemporal.correo = event.target.value;
    setAmigui(amiguiTemporal);
}
    
    return(
        <div className="modal">
            <h1 className="modal_header">Nuevo Amigo</h1>
            <form className="modal_formulario">
                <input typeof="text" placeholder="Nombre" onChange={onchangeNombre}/>
                <input typeof="text" placeholder="E-mail" onChange={onchangeCorreo}/>
                <input typeof="text" placeholder="Teléfono" onChange={onchangeTelefono}/>
                <div> 
                <button typeof="submit" onClick={modalGuardar}>Guardar</button>
                <button onClick={modalCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
   
    )
}

export default ModalAmigo;