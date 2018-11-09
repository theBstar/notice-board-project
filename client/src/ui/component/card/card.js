import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function (props) {
    return (
        <Link to={`/notice/${ props.id }` }>
            <div
                id={props.id}
                className="card"
            >
                <div className="container">
                    <h4><b>{props.title}</b></h4>
                </div>

            </div>
        </Link>
    );
}