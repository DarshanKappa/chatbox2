import React, { useEffect } from "react";
import * as d3 from "d3";
import { path } from "d3";

const data = [
    [0, 0.0],
    [1, 0.5],
    [2, 1.5],
    [3, 1.2],
    [4, 3.3],
    [5, 4.0],
    [6, 3.0],
    [7, 2.5],
    [8, 3.5],
    [9, 4.0],
    [10, 4.1],
    [11, 4.4],
]

function Scales({  }) {

    useEffect(() => {
      
        var svg = d3.select(".target1").append("svg").attr("width", 500).attr("height", 500).append("g").attr("transform", "translate(50, 50)");
        var xg = svg.append("g");
        var yg = svg.append("g");

        var xscale = d3.scaleLinear().domain([0, 11]).range([0, 450]);
        var yscale = d3.scaleLinear().domain([0.0, 5.0]).range([250, 0]);

        var valueLine = d3.line().x(d=>xscale(d[0])).y(d=>yscale(d[1]));

        
        var xAxis = xg.attr("transform", "translate(0, 250)").call(d3.axisBottom(xscale))
        var yAxis = yg.attr("transform", "translate(0, 0)").call(d3.axisLeft(yscale))
        
        svg.append("path").data([data]).attr("d", valueLine).attr("stroke", "seagreen").attr("fill", "none").attr("stroke-width", 2);
    
      return () => {
        d3.select(".target1").selectChild().remove();
      }
    }, [])
    

    return ( 
        <>
            <div className="target1"></div>
        </>
     );
}

export default Scales;