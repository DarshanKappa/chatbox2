


function SVGChart() {
    return (
        <>
            SVG
            <div>
                <svg width={420} height={120}>

                    <g transform="translate(0, 0)">
                      <rect width={50} height={19} fill="seagreen"></rect>
                      <text x={50} y={9.5} dy=".35em">5</text>
                    </g>
                    <g transform="translate(0, 20)">
                      <rect width={100} height={19} fill="seagreen"></rect>
                      <text x={100} y={9.5} dy=".35em">10</text>
                    </g>
                    <g transform="translate(0, 40)">
                      <rect width={120} height={19} fill="seagreen"></rect>
                      <text x={120} y={9.5} dy=".35em">12</text>
                    </g>

                </svg>
            </div>
        </>
     );
}

export default SVGChart;