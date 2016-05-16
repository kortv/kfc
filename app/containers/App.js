import React, { Component } from 'react';
import MainTabl from './../components/MainTabl';
import LeftBlock from './../components/LeftBlock';
import ModalMap from './../components/ModalMap';
import ModalOrder from './../components/ModalOrder';
// import './../SASS/scss.scss';


export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="layout">
        <LeftBlock />
        <ModalMap klass='show' />
        <ModalOrder klass='show' />
        <MainTabl />
      </div>
    );
  }
}
