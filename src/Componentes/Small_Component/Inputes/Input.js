import React from 'react';
import styles from './Input.module.css'
import { useState } from 'react';

const Input = (props) => {
    const [padd,setpadd] = useState("")
    return (
        
        <input placeholder={props.pl} className ={styles.Input_m} type ={props.typeinput}    />
    );
}

export default Input;
