import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import MainPage from './ui/container/mainApp/mainApp'

const RoutableApp = ()=>{
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    )
}

ReactDOM.render(<RoutableApp />, document.getElementById('root'));

