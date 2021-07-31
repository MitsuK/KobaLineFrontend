import React, { useState } from 'react';
import styles from './style.module.css';



const MessageForm: React.FC = ({ children }) => {

    const [message, setMessage] = useState("");
    let handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }
    return (
        <div className={styles.messageForm}>
            <form >
                <label>
                    <textarea className={styles.messageFormTextarea} rows={5} value={message} onChange={handleChange} />
                </label>
                <br />
                <input className={styles.formButton} type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MessageForm;