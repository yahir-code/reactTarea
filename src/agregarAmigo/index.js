import React from "react";  
import {ContactoContext} from "./../Context/contactoProvider"


function AgregarAmigo(params){
    let {setModal} = React.useContext(ContactoContext)
  
    const abreModal= ()=>{
        console.log("si jalo");
        setModal(true);
    }
    return(
        <button onClick={abreModal}>+Amigo</button>
    );

}

export default AgregarAmigo;