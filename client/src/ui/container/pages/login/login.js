import React, { Component } from 'react';
import Modal from '../../../component/modal/modal';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem('86cd79943901')
        }
        this.onSumbit = this.onSumbit.bind(this);
    }
    onSumbit(e) {
        e.preventDefault();
        const requestPayload = {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: `password=${e.target.password.value}&email=${e.target.email.value}`
        }
        fetch(
            '/api/admin/login',
            requestPayload
        ).then(res=>res.json())
         .then((data)=> {
             if (data.success) {
                localStorage.setItem('86cd79943901', data.token)
                this.setState({
                isLoggedIn: true
                })
             }
         })
    }
    render() {
        const propsToPass = {
            inputDetails: { 
                type: ['email', 'password'], 
                placeholder: ['Your@mail.com', 'Password']    
            },
            btnText: 'Login',
            redirectTo: '/admin',
        }
        return (
            <div className="main-container">
                <Modal 
                    onFormSubmit = { this.onSumbit }
                    canClose = { this.state.isLoggedIn } 
                    {...propsToPass}
                />
            </div>
        );
    }
}