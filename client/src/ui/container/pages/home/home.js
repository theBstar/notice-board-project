import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../../../component/cardContainer/cardContainer';
import Subscribe from '../../../component/button/subscribeButton/subscribe';
import './home.css' 

export default class MainContent extends Component {
    render() {
        return (
            <div className="main-container">
                <CardContainer notices = {this.props.notices}/>
                <Link to='/subscribe'> <Subscribe /> </Link>
            </div>
        );
    }
}