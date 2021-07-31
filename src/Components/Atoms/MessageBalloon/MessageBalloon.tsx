import React from 'react';
import './style.css';

export type MessageBalloonProps = {
    message: string;
    isMessageISent?: boolean;
}

const MessageBalloon: React.FC<MessageBalloonProps> = ({ children, message, isMessageISent }) => {
    console.log(isMessageISent);
    return (
        <div className={isMessageISent ? "messageBalloon" : "messageBalloonFromOthers"} >
            <p className="messageBalloonText">{message}</p>
        </div>
    );
}

export default MessageBalloon;