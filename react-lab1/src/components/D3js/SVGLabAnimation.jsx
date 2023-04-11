import React, { useEffect } from "react";
import * as d3 from "d3";
import { width } from "@mui/system";
import { text } from "d3";


// function SVGLab1({  }) {




//     const data = [0, 100, 200, 300, 400];


//     useEffect(() => {
//         var t = d3.transition().duration(2000)
//         d3.select("rect").transition(t).delay(1000).attr('fill', 'red')



//         return ()=>{}
//     }, [])
    

//     return ( 
//         <>


//             <svg style={{margin: "100px"}} width = "300" height = "300">
//                 <rect x = "20" 
//                     y = "20"
//                     width = "60"
//                     height = "60"
//                     fill = "green"
//                     >
//                 </rect>
//             </svg>

//         </>
//      );
// }

// export default SVGLab1;


// function Charts({  }) {

//     const data = [25, 199, 33, 93, 22, 9, 250]

//     const data2 = [199, 38, 244, 32, 10, 34, 110]

//     useEffect(() => {
//         let max = Math.max(...data)
//         let BarWidth = 100

//         let svg = d3.select(".target").append("svg").attr("width", 700).attr("height", 500)

//         let g = svg.append("g")

//         g.selectAll('rect').data(data).join('rect').attr("x", (v, index)=>(index*100)).attr("y", (v)=>(500-v)).attr("width", 50).attr("height", v=>v)

        
//         g.selectAll('rect').data(data2).attr("fill", "seagreen");
        
//         g.selectAll("text").data(data).join("text").attr("x", (v, index)=> {
//             var l = index*100;
//             if(v===0)
//                 return (l+(50-9)/2)
//             var t=v;
//             var c=0
//             while(t>=1){
//                 t = t/10;
//                 c = c + 1;
//             }
//             return (l+(50-(9*c))/2)
         
//         }).attr("y", (v)=>(500-v-2)).text(v=>v);

        
//         setTimeout(()=>{
//             var t = d3.transition().duration(2000);

//             d3.selectAll('rect').data(data2).join('rect').transition(t).attr("x", (v, index)=>(50 + index*100)).attr("y", (v)=>(500-v)).attr("width", 50).attr("height", v=>v)
//             d3.selectAll("text").data(data2).join("text").transition(t).attr("x", (v, index)=> {
//                 var l = index*100;
//                 if(v===0)
//                     return (l+(50-9)/2)
//                 var t=v;
//                 var c=0
//                 while(t>=1){
//                     t = t/10;
//                     c = c + 1;
//                 }
//                 return (50+l+(50-(9*c))/2)
//             }).attr("y", (v)=>(500-v-2)).text(v=>v);
//             // g.selectAll("rect").data(data2).transition(t).attr("transform", "translate(100, 0)").attr("height", v=>v).attr("y", (v)=>(500-v))
//             // g.selectAll("rect").data(data2).transition(t).attr("height", v=>v).attr("y", (v)=>(500-v));
            


//         }, 3000)

    
//       return () => {d3.select(".target").selectChild().remove()}
//     }, [])
    


//     return ( 
//         <>
//             <div className="target"></div>


//         </>
//      );
// }

// export default Charts;


function PieChart({ width=300, height=300 }) {

    const data = [
        {
            value: 67,
            color: "seagreen"
        },
        {
            value: 33,
            color: "tomato"
        },
        {
            value: 5,
            color: "yellow"
        },
    ]

    useEffect(()=>{

        let pie = d3.pie().value(d=>d.value);

        let color = d3.scaleOrdinal(["seagreen", "tomato"])

        let path = d3.arc().outerRadius(width/2).innerRadius(width/4);

        let svg = d3.select(".target").append("svg").attr("width", width).attr("height", height);
        let g = svg.append("g").attr('transform', "translate("+width/2+", "+height/2+")");;

        let arc = g.selectAll(".arc").data(pie(data)).join('g').attr("class", "arc")

        
        arc.append("path").attr("d", path);

        arc.append("text").attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text("Tree").style("fill", "white")
            .attr("transform", d=>{
                const [x, y] = path.centroid(d)
                return `translate(${x}, ${y})`
            });
        
        d3.selectAll(".arc").data(data).attr("fill", v=>v.color);



        return ()=>{
            d3.select(".target").selectChild().remove()
        }
    }, [])


    return ( 
        <>
            <div style={{margin: "50px"}} className="target"></div>
        </>
     );
}

export default PieChart;

function PieChat2(props) {
    const {
        data = [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }],
        outerRadius = 100,
        innerRadius = 50,
      } = props;
    
      const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
      };
    
      const width = 2 * outerRadius + margin.left + margin.right;
      const height = 2 * outerRadius + margin.top + margin.bottom;
    
      const colorScale = d3     
        .scaleSequential()      
        .interpolator(d3.interpolateCool)      
        .domain([0, data.length]);
    
      useEffect(() => {
        drawChart();
      }, [data]);
    
      function drawChart() {
        // Remove the old svg
        d3.select('#pie-container')
          .select('svg')
          .remove();
    
        // Create new svg
        const svg = d3
          .select('#pie-container')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);
    
        const arcGenerator = d3
          .arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius);
    
        const pieGenerator = d3
          .pie()
          .padAngle(0)
          .value((d) => d.value);
    
        const arc = svg
          .selectAll()
          .data(pieGenerator(data))
          .enter();
    
        // Append arcs
        arc
          .append('path')
          .attr('d', arcGenerator)
          .style('fill', (_, i) => colorScale(i))
          .style('stroke', '#ffffff')
          .style('stroke-width', 0);
    
        // Append text labels
        // arc
        //   .append('text')
        //   .attr('text-anchor', 'middle')
        //   .attr('alignment-baseline', 'middle')
        //   .text((d) => d.data.label)
        //   .style('fill', (_, i) => colorScale(data.length - i))
        //   .attr('transform', (d) => {
        //     const [x, y] = arcGenerator.centroid(d);
        //     return `translate(${x}, ${y})`;
        //   });
      }    
    
      return <div id="pie-container" />;
}

// export default PieChat2;