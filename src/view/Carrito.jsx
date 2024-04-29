import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Accordion, Image } from 'react-bootstrap';
export default function Carrito() {
    const {carrito, setCarrito} = useContext(CarritoContext);
    console.log(carrito)

   
    return (

        <div>

{carrito.map((e, index) =>{
    return(
        
       

        <div key={index}>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{e.name}</Accordion.Header>
        <Accordion.Body>
        <Image style={{width:"250px", margin:"10px"}} src={e.img} rounded />
         {e.price}
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    

    </div>


    )
  
})}

        </div>
        
    );
}

