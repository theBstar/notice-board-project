import React, {Component} from 'react';
import {Navbar} from '../../component/navbar/navbar';
import ContentSection from '../pages/mainPage/mainPage';

export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notices: null
        };
        this.addNotice = this.addNotice.bind(this);
        this.removeNotice = this.removeNotice.bind(this);
    }

    componentDidMount() {
        if(!this.state.notice) {
            const notices = [
                {
                    title: 'Last date of assignment submission extended',
                    text: 'IGNOU has extended the last date for submission of assignment for programmes MCA and  BCA',

                },
                {
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

    removeNotice(noticeId) {
        this.setState((prevState)=>({
            notices: prevState.notices.slice(0, noticeId).concat(prevState.notices.slice(noticeId+1))
        }));
    }

    render() {
        console.log('this is the state', this.state.notices)
        return (
            <div>
                <Navbar title = "Notice Board"/>
                <ContentSection 
                    notices = {this.state.notices}
                    addNotice = {this.addNotice}
                    removeNotice = {this.removeNotice}
                />
            </div>
        );
    }
}