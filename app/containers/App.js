import React, {Component} from 'react';
import MainTabl from './../components/MainTabl';
import LeftBlock from './../components/LeftMenu/LeftBlock';
// import './../SASS/scss.scss';


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
