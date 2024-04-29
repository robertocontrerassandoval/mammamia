import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function Navbar1(){
  const setActiveClass = ({ isActive}) =>(isActive? "active" : undefined);
    
  return (
    <div>
    
       <Navbar style={{backgroundColor:"gray" }}>
       {/* <nav style={{backgroundColor:"gray" }}> */}
           
            <NavLink className={setActiveClass} to="/">Home</NavLink>
            <NavLink className={setActiveClass} to="/pizzas">Pizzas</NavLink>
            <NavLink className={setActiveClass} to="/carrito">Carrito</NavLink>

          

       </Navbar>
          

   
        </div>
    );
}

export default Navbar1;
