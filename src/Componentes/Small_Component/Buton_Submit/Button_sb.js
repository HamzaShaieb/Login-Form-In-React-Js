
import React from 'react';
import styles from './Buton_Submit.module.css'

const ButtonSb = (props) => {
    return (
        <button className={styles.buuton_Sub}>
            {props.title}
        </button>
    );
}

export default ButtonSb;
