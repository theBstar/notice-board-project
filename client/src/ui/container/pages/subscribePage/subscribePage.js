import React, { Component } from 'react';
import SubscribeModal from '../../../component/modal/subscribeModal/subscribeModal';
import './subscribePage.css' 

export default class NoticePage extends Component {
    onSumbit(e) {
        e.preventDefault();
        console.log('Page submitted with data', JSON.stringify(e.target.name.value))
        return;
        const requestPayload = {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: `name=${e.target.name.value}&email=${e.target.email.value}`
        }
        fetch(
            '/api/subscribe',
            requestPayload
        )
    }
    render() {
        return (
            <div className="main-container">
                <SubscribeModal onFormSubmit = { this.onSumbit }/>
            </div>
        );
    }
}