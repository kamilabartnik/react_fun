import * as React from 'react';
import { Component } from 'react';
import Donut from './Items/Donut';
import LineChart from './Items/LineChart';
import BarGraphChart from './Items/BarGraphChart';
import MyChart from './Items/MyChart';
import '../../css/Pages/Charts.scss';

class Charts extends Component {

  render() {
    return (
      <div className="chart-app">
        <h1 className="info">Charts generated using Apexcharts</h1>
        <div className="row">
          <div className="donut-graph">
            <Donut />
          </div>
          <div className="my-chart">
            <MyChart />
          </div>

          <div className="bar-graph">
            <BarGraphChart />
          </div>
          <div className="line-graph">
            <LineChart />
          </div>

          <div className="close"></div>
        </div>
      </div>
    );
  }
}

export default Charts;