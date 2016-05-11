import React, { Component } from 'react';
import './../SASS/css.css';
import './../SASS/scss.scss';
import MainTabl from './../components/MainTabl';
import LeftBlock from './../components/LeftBlock';


export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="layout">
        <LeftBlock />
        <MainTabl />
      </div>
    );
  }
}
