import React, { useEffect } from "react";
import * as d3 from "d3";


function Arrays({}) {
    const data = [5, 20,40,60,80,100]
    useEffect(() => {
    
      
    }, [])
    
    return ( 
        <>
            <div>Max - {d3.max(data)}</div>
            <div>Min - {d3.min(data)}</div>
            <div>extent - {d3.extent(data)}</div>
            <div>sum - {d3.sum(data)}</div>
            <div>mean - {d3.mean(data)}</div>
            <div>quantile - {d3.quantile(data, .5)}</div>
        </>
     );
}

export default Arrays;