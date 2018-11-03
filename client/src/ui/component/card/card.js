import React from 'react';
import './card.css';

export default function (props) {
    return (
        <div
            id={props.id}
            className="card"
        >
            <div className="container">
                <h4><b>{props.title}</b></h4>
            </div>

        </div>
            );
}