import React, { useEffect } from "react";
import * as d3 from "d3";

const data = [
    {
        year: 2011,
        population: 0
    },
    {
        year: 2012,
        population: 13
    },
    {
        year: 2013,
        population: 15
    },
    {
        year: 2014,
        population: 15
    },
    {
        year: 2015,
        population: 17
    },
    {
        year: 2016,
        population: 22
    },
    {
        year: 2017,
        population: 25
    },
    {
        year: 2018,
        population: 27
    },
    {
        year: 2019,
        population: 30
    },
    {
        year: 2020,
        population: 32
    },
    {
        year: 2021,
        population: 33
    },
    {
        year: 2022,
        population: 35
    },
    {
        year: 2023,
        population: 35
    },
    {
        year: 2024,
        population: 37
    },
    {
        year: 2025,
        population: 40
    },
    {
        year: 2026,
        population: 41
    },
    {
        year: 2027,
        population: 42
    },
    {
        year: 2028,
        population: 44
    },
    {
        year: 2029,
        population: 45
    },
    {
        year: 2030,
        population: 45
    },
    {
        year: 2031,
        population: 46
    },
    {
        year: 2032,
        population: 49
    },
    {
        year: 2033,
        population: 52
    },
    {
        year: 2034,
        population: 55
    },
    {
        year: 2035,
        population: 54
    },    
    {
        year: 2036,
        population: 30
    },

]

const data2 = [
    {
        year: 2011,
        population: 14
    },
    {
        year: 2012,
        population: 13
    },
    {
        year: 2013,
        population: 18
    },
    {
        year: 2014,
        population: 11
    },
    {
        year: 2015,
        population: 20
    },
    {
        year: 2016,
        population: 21
    },
    {
        year: 2017,
        population: 21
    },
    {
        year: 2018,
        population: 29
    },
    {
        year: 2019,
        population: 29
    },
]
const data3 = [
    {
        year: 2011,
        population: 11
    },
    {
        year: 2012,
        population: 12
    },
    {
        year: 2013,
        population: 18
    },
    {
        year: 2014,
        population: 15
    },
    {
        year: 2015,
        population: 23
    },
    {
        year: 2016,
        population: 24
    },
    {
        year: 2017,
        population: 26
    },
    {
        year: 2018,
        population: 30
    },
    {
        year: 2019,
        population: 28
    },
]

function Graph({ width=700, height=500 }) {



    useEffect(()=>{

        let svg = d3.select(".target").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(50, 50)");

        let x = d3.scaleTime().range([0, width-100]);
        let y = d3.scaleLinear().range([height-100, 0]);

        var valueline = d3.line().x(d=>x(d.year)).y(d=>y(d.population));

        data.forEach(function(d) {
            d.year = d.year;
            d.population = +d.population;
         });

         console.log(data)

        x.domain(d3.extent(data, d=>d.year))
        y.domain([0, d3.max(data, d=>d.population)])

        svg.append("g").append("path").data([data]).attr("class", "line").attr("d", valueline);

        svg.append("g").call(d3.axisBottom(x)).attr("transform", "translate(0, "+400+")");

        svg.append("g").call(d3.axisLeft(y));




        return ()=>{
            d3.select(".target").selectChild().remove();
        }
    }, [])




    return ( 
        <>
            <div style={{margin: "50px"}} className="target"></div>
        </>
     );
}

// export default Graph;

function Graph2({ margin={left: 10, right:10, top: 10, bottom: 10}, height=500 }) {

    useEffect(()=>{
                 // set the dimensions and margins of the graph
                 var margin = {top: 20, right: 20, bottom: 30, left: 50},
                 width = 700 - margin.left - margin.right,
                 height = 400 - margin.top - margin.bottom;
        
                 // set the ranges
                 var x = d3.scaleBand().range([0, width]);
                 var y = d3.scaleLinear().range([height, 0]);
        
                 // define the line
                 var valueline = d3.line()
                    .x(d=>x(d.year))
                    .y(d=>y(d.population));
        
                 // append the svg obgect to the body of the page
                 // appends a 'group' element to 'svg'
                 // moves the 'group' element to the top left margin
                 var svg = d3.select(".target").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g").attr("transform",
                       "translate(" + margin.left + "," + margin.top + ")");
        
                // format the data
                data.forEach(function(d) {
                    d.year = d.year;
                    d.population = +d.population;
                });
    
                // Scale the range of the data
                x.domain(data.map(d=>d.year));
                y.domain([0, d3.max(data, function(d) { return d.population; })]);
    
                // Add the valueline path.
                svg.append("path")
                    .data([data])
                    .attr("class", "line")
                    .attr("d", valueline)
                    .attr("fill", "none").attr("stroke", "seagreen").attr("stroke-width", 3);

                // Add the Area
                svg.append("path")
                    .datum(data)
                    .attr("fill", "url(#svgGradient)")
                    .attr("d", d3.area()
                        .x(d=>x(d.year))
                        .y0(height)
                        .y1(d=>y(d.population))
                        );


                // svg.append("path")
                //     .data([data2])
                //     .attr("class", "line")
                //     .attr("d", valueline)
                //     .attr("fill", "none").attr("stroke", "url(#svgGradient)").attr("stroke-width", 2);
                // svg.append("path") // svg.append("path")
                //     .data([data2])
                //     .attr("class", "line")
                //     .attr("d", valueline)
                //     .attr("fill", "none").attr("stroke", "url(#svgGradient)").attr("stroke-width", 2);
                // svg.append("path")
                //     .data([data3])
                //     .attr("class", "line")
                //     .attr("d", valueline)
                //     .attr("fill", "none"
                //     .data([data3])
                //     .attr("class", "line")
                //     .attr("d", valueline)
                //     .attr("fill", "none").attr("stroke", "yellow").attr("stroke-width", 2);
    
                // Add the X Axis
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));
    
                // Add the Y Axis
                svg.append("g")
                    .call(d3.axisLeft(y));

        // ====================================================================================

        let svg2 = d3.select(".target6").append("svg").attr("width", 500).attr("height", 500);
        let g2 = svg2.append("g")

        let defs = g2.append("defs");

        var gradient = defs.append("linearGradient")
            .attr("id", "svgGradient")
            .attr("x1", "0%")
            .attr("x2", "0%")
            .attr("y1", "100%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("class", "start")
            .attr("offset", "0%")
            .attr("stop-color", "white")
            .attr("stop-opacity", 0.5);
            
        gradient.append("stop")
            .attr("class", "end")
            .attr("offset", "100%")
            .attr("stop-color", "seagreen")
            .attr("stop-opacity", 0.5);

        return () => {
            d3.select("svg").remove()
            svg2.remove(0)
        }
    }, [])

    return ( 
        <>
            <div className="target"></div>
            <div className="target6"></div>
            <svg>
                <rect x={0} y={0} width={200} fill="url(#svgGradient)" height={300} />
            </svg>
            
        </>
     );
}

export default Graph2;