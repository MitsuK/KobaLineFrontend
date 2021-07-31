import React from 'react';
import './style.css';

export type UsernameFieldProps = {
    username: string;
    width?: 128;
}

const UsernameField: React.FC<UsernameFieldProps> = ({ children, username, width }) => {
    return (
        <p className="usernameField">
            {username}
        </p >
    );
}

export default UsernameField;