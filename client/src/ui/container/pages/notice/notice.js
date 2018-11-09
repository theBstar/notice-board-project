import React from 'react';
import './notice.css'

export default function ( props ) {
    return (
        <div className="main-container">
            <div className='notice-card'>
                <div className='notice-title'>
                    { props.title }
                </div>
                <div className='notice-date'>
                    { props.notice.date.toLocaleString() || '' }
                </div>
                <div className='notice-details'>
                    { props.notice.details }
                </div>
            </div>
        </div>
    );
}