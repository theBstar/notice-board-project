import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from '../../../component/modal/modal';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem('86cd79943901'),
            isAdded: false
        }
    }

    render() {
        const propsToPass = {
            inputDetails: { 
                type: ['text', 'textArea'], 
                placeholder: ['Title', 'Enter Details']    
            },
            btnText: 'Add',
            redirectTo: '/admin',
        }
        return (
            (this.state.isLoggedIn) ? (
                <div className="main-container">
                    <Modal 
                        onFormSubmit = { this.props.onFormSubmit }
                        canClose = { this.state.isAdded } 
                        {...propsToPass}
                    />
                </div>
            ) : (
                <Redirect to='/admin' />
            )
        );
    }
}