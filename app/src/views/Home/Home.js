import HomeView from "./HomeView.js"
import React, {Component} from 'react';
import './Home.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HomeView/>
        );
    }
}