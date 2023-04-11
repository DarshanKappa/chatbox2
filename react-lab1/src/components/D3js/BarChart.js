import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useD3 } from '../../hooks/useD3';
import { selectAll } from 'd3';

const BarChart = ({ data }) => {
    const ref = useD3(
        (svg)=> {
            const height = 500;
            const width = 500;
            const margin = {top: 20, right: 30, bottom: 30, left: 40}

            const x = d3
                .scaleBand()
                .domain(data.map(d=> d.year))
                .rangeRound([margin.left, width - margin.right])
                .padding(0.1);

            const y1 = d3
                .scaleLinear()
                .domain([0, d3.max(data, d=> d.sales)])
                .rangeRound([height - margin.bottom, margin.top])

            const xAxis = g =>
                g.attr("transform", `translate(0, ${height - margin.bottom})`).call(
                    d3
                        .axisBottom(x)
                        .tickValues(
                            d3
                                .ticks(...d3.extent(x.domain()), width / 40)
                                .filter(v=> x(v) !== undefined)
                        )
                        .tickSizeOuter(0)
                );

            const y1Axis = (g) =>
                g
                  .attr("transform", `translate(${margin.left},0)`)
                  .style("color", "steelblue")
                  .call(d3.axisLeft(y1).ticks(null, "s"))
                  .call((g) => g.select(".domain").remove())
                  .call((g) =>
                    g
                      .append("text")
                      .attr("x", -margin.left)
                      .attr("y", 10)
                      .attr("fill", "currentColor")
                      .attr("text-anchor", "start")
                      .text(data.y1)
                );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);


            console.log(svg.selectAll())
        
            svg
                .select(".plot-area")
                .attr("fill", "seagreen")
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.year))
                .attr("width", x.bandwidth())
                .attr("y", (d) => y1(d.sales))
                .attr("height", (d) => y1(0) - y1(d.sales));
                
        },
        [data.length]
    );
    useEffect(()=>{
        // d3.select('.Darshan').selectChild('ul').attr('style', 'color: red').selectAll('li').data(data).join('li').text(d=>d.year)//.join('li').text(d => d.year)
        d3.select('.rect').selectChild('svg')
        

        return () => {}

    })

    return (
        <>
            {/* <div className="Darshan">
                Testing
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
            <div className="rect">
                <svg width='100%' height='500'>
                    <rect fill='seagreen' stroke='seagreen' x="0" y="0" width="200" height="200"></rect>
                    <rect fill='seagreen' stroke='seagreen' x="200" y="200" width="200" height="200"></rect>
                    <line x1="200" y1="0" x2="400" y2="200" stroke='seagreen' />
                    <line x1="0" y1="200" x2="200" y2="400" stroke='seagreen' />
                    <circle cx="600" cy="200" r="100" fill='seagreen' />
                    <ellipse cx="760" cy="200" rx="50" ry="120" />
                </svg>
                <svg width={'100%'} height={500}>
                    <polygon  points="100,200 700,200, 200,500  "
                        stroke='seagreen' 
                    />
                </svg>
            </div>
            <svg
                ref={ref}
                style={{
                    height: 500,
                    width: "100%",
                    marginRight: "0px",
                    marginLeft: "0px",
                }}
                >
                <g className="plot-area" />
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </>
    );
}

export default BarChart;