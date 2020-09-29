import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../charts/LineChart";
import { managerData, yearLabels } from "./mockData";

export default class Dashboard extends Component {
    render() {
        return (
            <div className={classes.container}>
            <header>
                <h1>{this.props.title}</h1>
            </header>
                <LineGraph
                    data={this.props.data}
                    year={this.props.year} />
            </div>
        )
    }
}
