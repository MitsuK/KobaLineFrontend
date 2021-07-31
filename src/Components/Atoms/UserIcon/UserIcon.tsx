import React from 'react';
import './style.css';

export type UserIconProps = {
    imgUrl?: string;
}

const UserIcon: React.FC<UserIconProps> = ({ children, imgUrl }) => {
    return (
        <>
            <img src="https://kouhekikyozou.com/wp-content/uploads/css_image_round-min.png" className="roundIcon" />
        </>
    );
}

export default UserIcon;