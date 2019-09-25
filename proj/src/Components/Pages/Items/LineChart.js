import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class LineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
        }
      },
      series: [{
        name: 'sales',
        data: [130,40,35,50,49,60,70,91,125]
      }],

    }
  }

  render() {

    return (
      <div className="myLineChart">
        <Chart type='line' options={this.state.options} series={this.state.series} />
      </div>
    );
  }
}

export default LineChart;