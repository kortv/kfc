import React, { Component } from 'react';
import LeftBlock from './../components/App/LeftBlock';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHome: props.location.pathname === '/',
    };
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    this.setState({
      isHome: nextProps.location.pathname === '/',
    });
  }
  render() {
    return (
      <div className={`layout${this.state.isHome ? ' grid' : ''}`}>
        <LeftBlock />
        {this.props.children}
      </div>
    );
  }
}
