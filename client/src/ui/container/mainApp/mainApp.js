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

    componentDidMount() {
        if(!this.state.notice) {
            const notices = [
                {
                    id: 1234,
                    title: 'Last date of assignment submission extended',
                    details: 'IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA',
                    date: new Date()

                },
                {
                    id: 1235,
                    title: 'Use Digital Material',
                    details: 'Opt for digital material and get 15% discout. Download econtent app for digital materials',
                    date: new Date()
                }
            ];
            this.setState((prevState, props)=> ({
                notices: [...prevState.notices, ...notices]
            }));
        }
        console.log("Notice updated", this.state.notices)
    }

    addNotice(e) {
        e.preventDefault();
        const newNotice = {
            id: Math.floor(Math.random() * 9999 ),
            title: e.target.text.value,
            details: e.target.textArea.value,
            date: new Date()
        }
        this.setState((prevState)=>({
            notices: [...prevState.notices, newNotice],
            isAdded: true
        }));
        setTimeout(()=> {
            this.setState({
                isAdded: false
            })
        }, 200)
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
        const noticeId = Number(match.params.id);
        let notice = null;
        if( this.state.notices ) {
            notice = this.state.notices.filter((notice)=> {
                if( noticeId === notice.id ) return true;
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
        // this.setState({
        //     isAdded: false
        // })
        return (
            <AddNoticePage
                onFormSubmit={ this.addNotice }
                isAdded = { this.state.isAdded } 
            />
        )
    }
  
    render() {
        console.log('this is the state', this.state.notices)
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