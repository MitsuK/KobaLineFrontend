import { style } from '@material-ui/system';
import React from 'react';
import { AddButton } from '../../Atoms/Icons/AddButton/AddButton';
import UsernameField, { UsernameFieldProps } from '../../Atoms/UsernameField/UsernameField';
import styles from './style.module.css';


const AddRoomButton: React.FC = ({ children }) => {
    const defaultUsername: UsernameFieldProps = {
        username: "追加",
    }
    return (
        <button className={styles.addRoomButton}>
            <div className={styles.addRoom} >
                <AddButton />
                <p className={styles.usernameSmall} >追加</p>
            </div>
        </button>
    );
}

export default AddRoomButton