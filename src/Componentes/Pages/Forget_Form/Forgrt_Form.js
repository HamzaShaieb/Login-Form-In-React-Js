import React from 'react';
import Styles from './Forget.module.css'
import GlopaleStyle from '../../../Styles_class/Class1.module.css'
/* Import Components */
import TitleText from '../../Small_Component/Text_Title/TitleText';
import Input from '../../Small_Component/Inputes/Input';
import ButtonSb from '../../Small_Component/Buton_Submit/Button_sb';
import { Link } from 'react-router-dom';


const ForgrtForm = () => {
    return (
        <div className={GlopaleStyle.container}>
            <TitleText textcontent = "Forget Password "/>
            <p className={Styles.text_h1}>Enter Your Email Adress</p>
            <form className={Styles.inputes}>
                <Input pl = "Enter Your Gmail Adress" typeinput="email" />
                <div className={Styles.smalltext}>
                <Link to="/" className={Styles.link} >Back</Link>
                </div>
                <ButtonSb title ="Continue" />
            </form>
        </div>
    );
}
export default ForgrtForm;
