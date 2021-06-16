import React, {useState, createContext} from 'react';
import Contador from './Contador';


export const Context = createContext();

export function ContextProvider(props){

    const [contador, setContador]=useState(0)

    return(
        <Context.Provider value={[contador,setContador]}>
            {props.children}
        </Context.Provider>
    )
}

