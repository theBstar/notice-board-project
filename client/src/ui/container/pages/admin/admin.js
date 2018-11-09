import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import CardContainer from '../../../component/cardContainer/cardContainer';
import AddButton from '../../../component/button/addButton/addButton';
import './admin.css';

export default class MainContent extends Component {
    constructor() {
        super();
        this.state = {
            authKey: localStorage.getItem('86cd79943901') || null
        }
    }

    render() {
        return (
            (this.state.authKey) ? (
                <div className="main-container">
                    <CardContainer notices = {this.props.notices}/>
                    <Link to='/notice/new'>
                        <AddButton /> 
                    </Link>
                </div>
            ) : (
                <Redirect to='/admin/login' />
            )
        );
    }
}