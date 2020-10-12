import React from 'react';
import './MessageListItem.css';

const MessageListItem = props => {
    return (
        <div className='message-list-item'>
            <h3>{props.author}</h3>
            <p>{props.message}</p>
            <p>{props.dateTime}</p>
        </div>
    );
};

export default MessageListItem;