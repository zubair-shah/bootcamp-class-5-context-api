import React, { useContext } from "react";
import CounterContext from "./countercontext";

const Child = (props) =>{
    let counterValue = useContext(CounterContext)
    return(
        <div>
            <h3>
                I am child render by parent my name is <strong> {counterValue} </strong> 
                {/* jb context api nhi thi tb hame parent se grand child ko data pas karwane ke lia asa karna parta tha  */}
                
            </h3>
        </div>
    )
}

export default Child ;