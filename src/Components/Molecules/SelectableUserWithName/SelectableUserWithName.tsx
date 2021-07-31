
import React from 'react';
import styles from "./style.module.css";
import UserCheckbox from '../../Atoms/Checkbox/Checkbox';
import UserListItem from '../../Atoms/UserListItem/UserListItem';

const SelectableUserWithName: React.FC = ({ children }) => {
    return (
        <div className={styles.selectableUserWithName} >
            <UserCheckbox />
            <UserListItem username="a" withoutHover={true} />
        </div >
    )
}


export default SelectableUserWithName