import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: '15000%',
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="my-line-chart">
        <Chart type='donut' options={this.state.options} series={this.state.series} />
      </div>
    );
  }
}

export default Donut;