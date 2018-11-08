import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Navbar} from '../../component/navbar/navbar';
import ContentSection from '../pages/mainPage/mainPage';
import AdminPage from '../pages/admin/admin';
import NoticePage from '../pages/noticePage/noticePage';
import SubscribePage from '../pages/subscribePage/subscribePage';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notices: null
        };
        this.addNotice = this.addNotice.bind(this);
        this.renderHome = this.renderHome.bind(this);
        this.renderAdmin = this.renderAdmin.bind(this);
        this.renderNotice = this.renderNotice.bind(this);
        this.renderSubscribe = this.renderSubscribe.bind(this);
    }

    componentDidMount() {
        if(!this.state.notice) {
            const notices = [
                {
                    noticeNo: 1234,
                    title: 'Last date of assignment submission extended',
                    text: 'IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA',

                },
                {
                    noticeNo: 1235,
                    title: 'Use Digital Material',
                    text: 'Opt for digital material and get 15% discout. Download econtent app for digital materials'

                }
            ];
            this.setState({
                notices
            });
        }
        console.log("hostel updated", this.state.notices)
    }

    addNotice(newNotice) {
        this.setState((prevState)=>({
            notices: [...prevState.notices, newNotice]
        }));
    }

    renderHome() {
        return (
            <ContentSection 
                    notices = {this.state.notices}
            />
        )
    }

    renderAdmin() {
        return (
            <AdminPage
                notices = {this.state.notices}
                addNotice = {this.addNotice}
            />
        )
    }

    renderNotice({ match }) {
        const requestedNoticeNo = Number(match.params.noticeNo);
        let notice = null;
        if( this.state.notices ) {
            notice = this.state.notices.filter((notice)=> {
                if( requestedNoticeNo === notice.noticeNo ) return true;
                return false;
            })[0]
        }
        return(
            <NoticePage notice = {notice}/>
        )
    }

    renderSubscribe() {
        return (
            <SubscribePage />
        )
    }
  
    render() {
        console.log('this is the state', this.state.notices)
        return (
            <div>
                <Navbar title = "Notice Board"/>
                <Route exact path='/admin' render = { this.renderAdmin } />
                <Route path='/:noticeNo' render = { this.renderNotice } />
                <Route path='/subscribe' render = { this.renderSubscribe } />
                <Route exact path='/' render = { this.renderHome } />
                
            </div>
        );
    }
}