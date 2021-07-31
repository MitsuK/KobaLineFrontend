import React, { FC } from 'react'
import styles from './style.module.css';
type Props = {
}

export const AddButton: FC<Props> = (props: Props) => {
    return (
        <svg className={styles.addButton} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#C8C8C8" />
            <rect x="28" y="8" width="8" height="48" fill="#808080" />
            <rect x="8" y="28" width="48" height="8" fill="#808080" />
        </svg>
    )
}


