import React from 'react';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


export default function Pizzas () {
    const {Api, setApi} = useContext(ApiContext);
    const {id} = useParams();

    const AgregarCarrito = function (e) {
      setApi([...Api, e])
    }

    const pizza = Api.find((element) => element.id === id);
  
      return (
          <>
         
            
     
     
              <div>
                <Card style={{ width: '300px' }}>
                  <Card.Img style={{width:"250px"}} variant="top" src={pizza.img} />
                    <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                        <Card.Text>{pizza.desc}</Card.Text>
                        <Button variant="primary" onClick={() => {AgregarCarrito (pizza.id) }} >Añadir</Button>
  
                    </Card.Body>
                </Card>
              </div> 
  
  
          
      

          </>
      );
}


