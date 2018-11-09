import React, { Component } from 'react';
import Modal from '../../../component/modal/modal';
import './subscribe.css' 

export default class NoticePage extends Component {
    constructor() {
        super();
        this.state = {
            isSubmitted: false
        }
        this.onSumbit = this.onSumbit.bind(this);
    }
    onSumbit(e) {
        e.preventDefault();
        this.setState({
            isSubmitted: true
        });
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
        const propsToPass = {
            inputDetails: { 
                type: ['email', 'text'], 
                placeholder: ['Your@mail.com', 'Your Name']    
            },
            btnText: 'Subscribe',
            redirectTo: '/'
        }
        return (
            <div className="main-container">
                <Modal 
                    onFormSubmit = { this.onSumbit }
                    canClose = { this.state.isSubmitted } 
                    {...propsToPass}
                />
            </div>
        );
    }
}