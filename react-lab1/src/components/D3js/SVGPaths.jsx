import React, { useEffect } from "react";
import * as d3 from "d3";



function SVGPaths({  }) {

    const data = [[0, 20], [50, 30], [100, 50], [200, 60], [300, 90]];

    useEffect(() => {
        let svg = d3.select(".target").append("svg").attr("width", 500).attr("height", 500);

        let g = svg.append("g");

        var lineGenerator = d3.line();
        var pathString = lineGenerator(data)
        g.append("path").attr("d", pathString).attr("fill", "none").attr("stroke", "seagreen").attr("stroke-width", 2);


        // Axis


        




      
    
      return () => {
        d3.select(".target").selectChild().remove();
      }
    }, [])
    

    return ( 
        <>
            <div className="target"></div>
        </>
     );
}

export default SVGPaths;

