import React, { Component } from 'react';
import './noticePage.css' 

export default class NoticePage extends Component {
    render() {
        console.log('Notice is: ', JSON.stringify(this.props.notice))
        return (
            <div className="main-container">
                
            </div>
        );
    }
}