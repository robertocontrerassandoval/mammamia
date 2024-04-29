import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ApiContext} from "../context/ApiContext";
import {Button, Card, Container, Image, Row, Col }from 'react-bootstrap';
import { CarritoContext } from '../context/CarritoContext';



export default function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const {Api, setApi} = useContext(ApiContext);
 const {carrito, setCarrito} = useContext(CarritoContext);

  const irAPizzas = (id) => {
    navigate(`/pizzas/${id}`);
  };

const AgregarCarrito = function (e) {
  setCarrito([...carrito, e])
}
    return (
        <>


          <Container>
    <Row>
      <Col style={{width:"1280px"}}>
        <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" rounded />
      </Col>
      </Row>
      </Container> 
          <div style={{display:"grid", gridTemplateColumns:"auto auto auto", gap:"5px"}}>
    {Api.map((pizza, index) => {
        return (
            <div key={index}>
              <Card  style={{ width: '300px', gap: "5px"}}>
                <Card.Img style={{width:"250px", margin:"10px"}}  src={pizza.img} />
                  <Card.Body style={{display:"flex", flexDirection:"column", margin:"20px"}}>
                    <Card.Title style={{display:"flex", justifyContent:"center"}}>{pizza.name}</Card.Title>
                      <Card.Text> ${pizza.price}</Card.Text>
                    <Button variant="primary" onClick={() => {AgregarCarrito (pizza) }} >Añadir</Button>
                    <Button variant="primary" onClick={ () => {irAPizzas (pizza.id) }} >Ver más</Button>

                  </Card.Body>
              </Card>
            </div>


        );
    })}
</div>

  



        
        </>
    );
}


