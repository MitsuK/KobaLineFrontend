import React from 'react';
import UserIcon, { UserIconProps } from '../../Atoms/UserIcon/UserIcon';
import UsernameField, { UsernameFieldProps } from '../../Atoms/UsernameField/UsernameField';
import './style.css';

export type UserProps = {
    imgUrl?: string;
    username: string;
    withoutHover?: boolean
}

const UserWithName: React.FC<UserProps> = ({ children, imgUrl, username }) => {
    let defaultUser: UserIconProps = {}
    let defaultUsername: UsernameFieldProps = {
        username: username ? username : "ななしのごんべえ"
    }
    return (
        <div className="userWithName">
            <UserIcon {...defaultUser} />
            <UsernameField {...defaultUsername} />
        </div >
    );
}

export default UserWithName;