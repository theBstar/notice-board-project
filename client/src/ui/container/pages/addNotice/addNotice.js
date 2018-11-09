import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Modal from '../../../component/modal/modal';

export default class AddNoticePage extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem('86cd79943901'),
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
        console.log("....this is the isAdded", this.props.isAdded)
        return (
            (this.state.isLoggedIn) ? (
                <div className="main-container">
                    <Modal 
                        onFormSubmit = { this.props.onFormSubmit }
                        canClose = { this.props.isAdded } 
                        {...propsToPass}
                    />
                </div>
            ) : (
                <Redirect to='/admin' />
            )
        );
    }
}