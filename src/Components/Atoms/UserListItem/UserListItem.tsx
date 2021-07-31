import React from 'react';
import styles from './style.module.css';
import { UserProps } from '../../Molecules/UserWithName/UserWithName';

const UserListItem: React.FC<UserProps> = ({ children, imgUrl, username, withoutHover }) => {
    const handleClick = (value: string) => {
        console.log(value);
    }
    console.log()
    return (
        <button onClick={() => handleClick(username)} value={username} className={withoutHover ? styles.withoutHover : styles.userListItemButton}>
            <div className={styles.userListItem} >
                <img src="https://kouhekikyozou.com/wp-content/uploads/css_image_round-min.png" className={styles.roundIconSmall} alt="aa" />
                <p className={styles.usernameSmall} >{username}</p>
            </div>
        </button>
    );
}

export default UserListItem;