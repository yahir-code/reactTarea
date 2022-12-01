
import './App.css';
import React from 'react';


import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import "./Busqueda/Busqueda.css";
import AgregarAmigo from './agregarAmigo';
import {ContactoContext,ContactoProvider} from './Context/contactoProvider';
import ModalAmigo from './ModalAmigo';
function App() {

  //let contactos=[
    //{
      //  nombre:"Yahir",
        //telefono:"32213411",
        //correo:"yahir@gmail.com"
   // },
    //{
      //  nombre:"Leo",
       // telefono:"3232411",
       // correo:"Leo@gmail.com"
   // },
    //{
      //  nombre:"Plata",
        //telefono:"323233411",
        //correo:"Plata@gmail.com"
  //  },
   // {
    //  nombre:"Joel",
      //telefono:"3233411",
      //correo:"Joel@gmail.com"
 // },
   //             ]
   return (
      
    <ContactoProvider>
      <ContactoContext.Consumer>
        {({cantidadAmigos,
        contactosFiltro,
        borrarAmigo,
        modal})=>(
          <React.Fragment>
              <h1 className="titulo">Mi lista de Contactos</h1>
  <h3 className='cantidadAmigos'>Tengo {cantidadAmigos} amigos</h3>
  <Busqueda/>
  <AgregarAmigo/>
  <Lista>
        {
            contactosFiltro.map((contacto)=>{
                return (<Contacto
                        nombre={contacto.nombre}
                        telefono={contacto.telefono}
                        correo={contacto.correo}
                        borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
            })
        }
  </Lista>
  {contactosFiltro.length === 0 && <h1>No tienes amigos</h1>}
        {modal && <ModalAmigo />}
          </React.Fragment>
        )}
  
      </ContactoContext.Consumer>
    </ContactoProvider>
);
}

export default App;
