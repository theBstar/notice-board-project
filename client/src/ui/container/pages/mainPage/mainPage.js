import React, { Component } from 'react';
import './mainPage.css' 
import CardContainer from '../../../component/cardContainer/cardContainer';
import Subscribe from '../../../component/button/subscribeButton/subscribe';

export default class MainContent extends Component {
    render() {
        return (
            <div className="main-container">
                <CardContainer notices = {this.props.notices}/>
                <Subscribe />
            </div>
        );
    }
}