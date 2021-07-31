import React from 'react';
import UserWithName, { UserProps } from '../../Molecules/UserWithName/UserWithName';
import MessageBalloon, { MessageBalloonProps } from '../../Atoms/MessageBalloon/MessageBalloon';
import './style.css';




const MessageItem: React.FC<MessageBalloonProps> = ({ children, message, isMessageISent }) => {
    let tmp: MessageBalloonProps = {
        message: message,
        isMessageISent: isMessageISent
    }
    return (
        <div className="messageItem">
            <div className="userWithName_boxA" >
                {(isMessageISent) && <UserWithName username="a" />}
            </div>
            <MessageBalloon {...tmp} />
            {!(isMessageISent) && <UserWithName username="a" />}
        </div >
    );
}

export default MessageItem;