import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineChart.module.css";

export default class LineGraph extends Component {
    state = {
        year: this.props.year,
        labels : [...Array(10).keys()]
    }


    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
 
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.state.labels,
                datasets: [
                    {
                        label: "$",
                        data: [10,11,12,14,15,17,20,24,28,32],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}