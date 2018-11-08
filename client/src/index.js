import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './ui/container/mainApp/mainApp';
import './index.css';

const RoutableApp = ()=>{
    return (
        <BrowserRouter>
            <MainPage/>
        </BrowserRouter>
    )
}

ReactDOM.render(<RoutableApp />, document.getElementById('root'));

