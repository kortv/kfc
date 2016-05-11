import React, { Component } from 'react';
import './../SASS/main.sass';
import MainTabl from './../components/MainTabl';
import LeftBlock from './../components/LeftBlock';


export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <LeftBlock />
        <MainTabl />
      </div>
    );
  }
}
