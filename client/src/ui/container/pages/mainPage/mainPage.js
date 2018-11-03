import React, { Component } from 'react';
import './mainPage.css' 
import CardContainer from '../../../component/cardContainer/cardContainer';
import Subscribe from '../../../component/button/subscribeButton/subscribe';
import AddButton from '../../../component/button/addButton/addButton'

export default class MainContent extends Component {
    render() {
        const subOrAddBt = ''
        console.log("this is the subOrAddBt ", subOrAddBt);
        return (
            <div className="main-container">
                <CardContainer notices = {this.props.notices}/>
                {
                    (this.props.admin && this.props.admin.token) ? 
                    ( <AddButton /> ) : ( <Subscribe /> )
                }
            </div>
        );
    }
}