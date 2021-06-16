import React, {useContext} from 'react';
import { Context } from './Context';


function Cabecalho(props){
    const [contador, setContador]= useContext(Context)
    
    return (
        <div className="container">
            <h3>Contador</h3>
            <div><strong>{contador}</strong></div>
        </div>
    )
}

export default Cabecalho
