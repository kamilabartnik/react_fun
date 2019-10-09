import React, {Component} from 'react';

class DateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const dateStr = "  Time now: "+this.state.date.getHours()+":"+this.state.date.getMinutes()+":"+this.state.date.getSeconds()+"  "+this.state.date.getDate()+"/"+this.state.date.getMonth()+"/"+this.state.date.getFullYear();
    return <time>{dateStr}</time>;
  }
}

export default DateComponent;