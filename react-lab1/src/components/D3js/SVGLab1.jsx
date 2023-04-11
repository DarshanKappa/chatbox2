import React, { useEffect } from "react";
import * as d3 from "d3";


function SVGLab1({  }) {

    const data = [0, 100, 200, 300, 400];


    useEffect(() => {
        var d = d3.select(".chart1").append("circle").attr('cx', "50px").attr("cy", "50px").attr("r", "50px").attr('fill', "seagreen").data(data).join("react");

        d3.select(".chart2").selectAll("circle").data(data).join('circle').attr("cx", v=>v+"px").attr("cy", v=>v+"px").attr("r", "50px").attr("fill", "red")

        // setTimeout(()=>d3.select("rect").attr("transform", "translate(60 60) rotate(45)"), 2000)
        var t = d3.transition().duration(2000)
        d3.select("rect").transition(t).attr("transform", "translate(200)")



        return ()=>{d3.select(".chart1").selectChild().remove()
                    d3.select(".chart2").selectChild().remove()}
    }, [])
    

    return ( 
        <>
            {/* <svg width={200} height={200}>
                <g className="chart1"></g>
            </svg>

            <svg width={700} height={700}>
                <g className="chart2"></g>
            </svg> */}

            <svg style={{margin: "100px"}} width = "300" height = "300">
                <rect x = "20" 
                    y = "20"
                    width = "60"
                    height = "60"
                    fill = "green"
                    >
                </rect>
            </svg>

           {/* <svg width = "300" height = "300">
                <g transform = "translate(60,60) rotate(30)">
                    <rect x = "100" 
                    y = "100" 
                    width = "60" 
                    height = "30" 
                    fill = "green">
                    </rect>
                    <circle cx = "150" 
                    cy = "150" 
                    r = "30" 
                    fill = "red"/>
                </g>
            </svg> */}


        </>
     );
}

export default SVGLab1;