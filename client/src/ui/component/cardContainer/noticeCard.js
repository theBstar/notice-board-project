import React from 'react';
import Card from '../card/card'

export default function(props) {
    return (
        <Card 
            id = {props.index}
            title = {props.notice.title}
            text = {props.notice.text}
        />
    );
}