import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../charts/LineChart";
import { managerData, yearLabels } from "./mockData";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        labels: yearLabels
    }

    render() {
        const { data, labels } = this.state;
        console.log(this.props.year)
        return (
            <div className={classes.container}>
            <header>
                <h1>{this.props.title}</h1>
            </header>
                <LineGraph
                    data={data}
                    year={this.props.year} />
            </div>
        )
    }
}