import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Navbar} from '../../component/navbar/navbar';
import HomePage from '../pages/home/home';
import AdminPage from '../pages/admin/admin';
import NoticeDetailsPage from '../pages/notice/notice';
import SubscribePage from '../pages/subscribe/subscribe';
import LoginPage from '../pages/login/login';
import AddNoticePage from '../pages/addNotice/addNotice';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notices: [],
            isAdded: false
        };
        this.addNotice = this.addNotice.bind(this);
        this.renderHome = this.renderHome.bind(this);
        this.renderAdmin = this.renderAdmin.bind(this);
        this.renderNotice = this.renderNotice.bind(this);
        this.renderSubscribe = this.renderSubscribe.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.renderAddNotice = this.renderAddNotice.bind(this);
    }

    componentWillMount() {
        fetch('/api/notice')
            .then((res)=>res.json())
            .then((recienvedNotices)=> {
                this.setState({
                    notices: recienvedNotices
                })
            });
    }

    addNotice(e) {
        e.preventDefault();
        const newNotice = {
            title: e.target.text.value,
            details: e.target.textArea.value,
            date: new Date()
        }
        const requestPayload = {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              body: `token=${localStorage.getItem('86cd79943901')}&title=${newNotice.title}&details=${newNotice.details}&date=${newNotice.date}`
        }
        fetch(
            '/api/notice',
            requestPayload
        ).then(res=>res.json())
         .then((data)=> {
             if(data.success) {
                const noticeWithId = {
                    ...newNotice,
                    _id: data.noticeId
                }
                this.setState((prevState)=>({
                    notices: [...prevState.notices, noticeWithId],
                }));
             } else if (data.notAdmin) {
                 localStorage.removeItem('86cd79943901')
             }
             this.setState({
                isAdded: true
             });
             setTimeout(()=> {
                this.setState({
                    isAdded: false
                })
            }, 0)
         })
    }

    renderHome() {
        return (
            <HomePage 
                    notices = {this.state.notices}
            />
        )
    }

    renderAdmin() {
        return (
            <AdminPage
                notices = { this.state.notices }
                addNotice = { this.addNotice }
            />
        )
    }

    renderNotice({ match }) {
        const noticeId = match.params.id;
        let notice = null;
        if( this.state.notices ) {
            notice = this.state.notices.filter((notice)=> {
                if( noticeId === notice._id ) return true;
                return false;
            })[0]
        }
        return(
            <NoticeDetailsPage notice = {notice}/>
        )
    }

    renderSubscribe() {
        return (
            <SubscribePage />
        )
    }

    renderLogin() {
        return (
            <LoginPage />
        )
    }

    renderAddNotice() {
        console.log("render add notice called ", this.state.isAdded)
        return (
            <AddNoticePage
                onFormSubmit={ this.addNotice }
                isAdded = { this.state.isAdded } 
            />
        )
    }
  
    render() {
        return (
            <div>
                <Navbar title = "Notice Board"/>
                <Switch>
                    <Route exact path='/notice/new' render = { this.renderAddNotice } />
                    <Route exact path='/notice/:id' render = { this.renderNotice } />
                    <Route exact path='/admin/login' render = { this.renderLogin } />
                    <Route exact path='/admin' render = { this.renderAdmin } />
                    <Route exact path='/subscribe' render = { this.renderSubscribe } />
                    <Route path='/' render = { this.renderHome } />
                </Switch>
            </div>
        );
    }
}