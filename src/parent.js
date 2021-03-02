import React from 'react';
import Child from "./child";


const Parent = (props) =>{
    return(
        <div>
            <h1>I am Parent</h1>

         {/* <Child name={props.name} /> */}
         <Child />
        </div>
    )
}

export default Parent;