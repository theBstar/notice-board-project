import React from 'react';
import NoticeCard from './noticeCard';
export default function(props) {
    return (
        <div style={{width: "100%"}}>
        {props.notices ? (
            props.notices.map((notice, index) => {
                return <NoticeCard key={index + new Date().getTime()} notice={notice} index={index} />
            })
        ) : ""
        }
        </div>
    );
}