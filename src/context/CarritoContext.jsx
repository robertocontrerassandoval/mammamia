import React, { useEffect } from 'react';
import { createContext, useState  } from 'react';
import data from "../../public/pizzas.json"
export const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    return (
     <CarritoContext.Provider value={{carrito, setCarrito}}>
        {children}
     </CarritoContext.Provider>
    );
}

export default CarritoProvider;