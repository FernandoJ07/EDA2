import React from "react";
import { memo } from "react";

export const Son = memo(
    ({numero, increment}) =>{
        console.log("again reloaded....")
        return(
            <button onClick={()=>{increment(numero)}}>
                {numero}
            </button>
        )
    }
)