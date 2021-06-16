import React, {useContext, useState} from 'react' ;
import { Context } from './Context';


function Contador(props){
    const [contador, setContador]= useContext(Context)

       return(
        <div className= "contador" >
            <h3>{contador}</h3>
            <button onClick={()=>{setContador(e => contador+1)}}>+</button>
            <button onClick={()=>{setContador(e => contador-1)}}>-</button>
        </div>
    )
}


export default Contador