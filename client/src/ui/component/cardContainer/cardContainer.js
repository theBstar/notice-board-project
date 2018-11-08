import React from 'react';
import Card from '../card/card';
export default function(props) {
    return (
        <div style={{width: "100%"}}>
        {props.notices ? (
            props.notices.map((notice, index) => {
                return (
                    <Card 
                        key={ index + new Date().getTime() } 
                        { ...notice }
                    />
                )
            })
        ) : ""
        }
        </div>
    );
}