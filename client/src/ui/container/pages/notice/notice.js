import React from 'react';
import './notice.css'

export default function (props) {
    return (
        (props.notice) ? (
            <div className="main-container">
                <div className='notice-card'>
                    <div className='notice-title'>
                        {props.notice.title}
                    </div>
                    <div className='notice-details'>
                        {props.notice.details}
                    </div>
                    <div className='notice-date'>
                        Dated: {props.notice.date.toLocaleString()}
                    </div>
                </div>
            </div>
        ) : (
                <div style={{
                    marginTop: '30vh',
                    textAlign: 'center',
                    fontSize: '1.5em',
                }}>
                    Invalid Notice Id
                </div>
            )
    );
}