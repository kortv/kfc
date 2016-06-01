import React, { Component } from 'react';
import LeftBlock from './../components/App/LeftBlock';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className='layout'>
        <LeftBlock />
        {this.props.children}
      </div>
    );
  }
}
