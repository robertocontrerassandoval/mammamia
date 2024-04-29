import React, { useEffect } from 'react';
import { createContext, useState  } from 'react';
import data from "../../public/pizzas.json"
export const ApiContext = createContext();

const ApiProvider = ({children}) => {
    const [Api, setApi] = useState([])

    const fetchData = async () => {
       await setApi(data);  
    }
    useEffect( ()=> {
        fetchData();
    }, []);
 
    console.log(Api)
    return (
     <ApiContext.Provider value={{Api, setApi}}>
        {children}
     </ApiContext.Provider>
    );
}

export default ApiProvider;
