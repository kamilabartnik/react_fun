import React, { Component } from "react";
import Donut from './Items/Donut';
import LineChart from './Items/LineChart';
import BarGraphChart from './Items/BarGraphChart';
import MyChart from './Items/MyChart';
import '../../css/Pages/Charts.css';

class Charts extends Component {

  render() {
    return (
      <div className="chartApp">
        <h1 className="info">Charts generated using Apexcharts</h1>
        <div className="row">
          <div className="myChart">
            {/* <MyChart /> */}
          </div>
          <div className="barGraph">
            <BarGraphChart />
          </div>
          <div className="lineGraph">
            <LineChart />
          </div>
          <div className="donutGraph">
            <Donut />
          </div>
          <div className="close"></div>
        </div>
      </div>
    );
  }
}

export default Charts;