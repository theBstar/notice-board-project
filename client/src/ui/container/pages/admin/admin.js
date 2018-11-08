import React, { Component } from 'react';
import './admin.css' 
import CardContainer from '../../../component/cardContainer/cardContainer';
import AddButton from '../../../component/button/addButton/addButton';


export default class MainContent extends Component {
    render() {
        return (
            <div className="main-container">
                <CardContainer notices = {this.props.notices}/>
                <AddButton />
            </div>
        );
    }
}