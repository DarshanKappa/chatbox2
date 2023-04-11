import * as d3 from "d3";
import { useEffect } from "react";



function Shapes() {

    const data = [20, 193, 22, 93, 77]
    const colors = ["seagreen", "pink", "yellow", "tomato", "gray"]


    useEffect(() => {
      
        let svg = d3.select(".target2").append("svg").attr("width", 500).attr("height", 500);
        let g = svg.append("g");

        let arc = d3.arc().innerRadius(100).outerRadius(200);

        let pie = d3.pie().value(d=>d)

        g.selectAll(".arc").data(pie(data)).join("g").attr("class", "arc").attr("transform", "translate(250, 250)").append("path").attr("d", arc).attr("a", v=>console.log(v));

        d3.selectAll(".arc").data(colors).attr("fill", c=>c)
        d3.selectAll(".arc").data(pie(data)).append("text").attr("transform", v=>{let [x, y] = arc.centroid(v); return `translate(${x}, ${y})`}).text("Text")
            .attr("fill", "black").attr("text-anchor", "middle").attr("alignment-baseline", "middle");

    //===============================================================================================

        let svg2 = d3.select(".target3").append("svg").attr("width", 500).attr("height", 500);
        let g2 = svg2.append("g");

        let arc2 = d3.arc().innerRadius(100).outerRadius(200).startAngle(-Math.PI/2).endAngle(Math.PI/2);

        g2.append("path").attr("d", arc2).attr("transform", "translate(250, 250)")


    //===============================================================================================

        let svg3 = d3.select(".target4").append("svg").attr("width", 500).attr("height", 500);
        let g3 = svg3.append("g");
        
        let data3 = [ [10,100], [20, 150], [30, 190], [40, 210], [50, 220], [60, 210], [70, 170], [80, 160], [90, 150], [100, 150] ]
        
        let curve = d3.line().curve(d3.curveNatural);

        g3.append("path").attr("d", curve(data3)).attr("fill", "none").attr("stroke", "black")


    //===============================================================================================

        let svg4 = d3.select(".target5").append("svg").attr("width", 500).attr("height", 500);
        let g4 = svg4.append("g").attr("transform", "translate(250, 250)");

        let data4 = Array.from({length: 100}, (_, i)=>[(Math.PI/5)*i, 2*i])

        let lineRadial = d3.lineRadial();

        g4.append("path").attr("d", lineRadial(data4)).attr("fill", "none").attr("stroke", "black")
        // g4.attr("transform", tra)

        




    
      return () => {
        svg.remove();
        svg2.remove();
        svg3.remove();
        svg4.remove();
      }
    }, [])
    
    return ( 
        <>
            <div className="target5"></div>

            <div className="target4"></div>

            <div className="target2"></div>

            <div className="target3"></div>

        </>
     );
}

export default Shapes;