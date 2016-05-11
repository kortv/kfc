import React, { Component } from 'react';
import './../SASS/main.sass';
import './../SASS/css.css';
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
