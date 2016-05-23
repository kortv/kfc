import React, { Component } from 'react';
import MainTablNew from './../components/MainTablNew';
import LeftBlock from './../components/LeftMenu/LeftBlock';
import googleMapInit from './../events/googleMapInit';
// import './../SASS/scss.scss';


export default class App extends Component {

  componentDidMount() {
    google.maps.event.addDomListener(window, 'load', googleMapInit);
  }

  render() {
    return (
      <div className='layout'>
        <LeftBlock />
        <MainTablNew />
      </div>
    );
  }
}
