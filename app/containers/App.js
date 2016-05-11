import React, {Component} from 'react';
import MainTabl from './../components/MainTabl';
import LeftBlock from './../components/LeftBlock';
// import './../SASS/css.css';
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
