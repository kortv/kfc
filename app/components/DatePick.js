import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/index.css';


export default class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2016-10-03',
    };
  }
  componentDidMount() {

  }
  onChange =(date) => {
    console.log(date);
    this.setState({
      date,
    });
  }

  render() {
    return (<div>
      <DatePicker
        minDate='2013-10-10'
        maxDate='2016-11-11'
        locale='ru'
        onChange={this.onChange}
        style={{ height: 300 }}
      />
    </div>);
  }
}
