import React from 'react';
import GlobaleStyle from '../../../Styles_class/Class1.module.css'
import Styles from './Sign.module.css'
import TitleText from '../../Small_Component/Text_Title/TitleText';
import Input from '../../Small_Component/Inputes/Input';
import ButtonSb from '../../Small_Component/Buton_Submit/Button_sb';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className ={GlobaleStyle.container}>
          <TitleText textcontent="Sign Up" />
          <form className={Styles.inputes}> 
            <Input pl ="UserName" typeinput="text" />
            <Input pl ="Email" typeinput="email" />
            <Input pl ="Password" typeinput="password" marg="auto auto 30px auto"  />
         <div>
         <div className={Styles.smalltext}>
            <Link to="/" className={Styles.link} >Back</Link>
        </div>
            <ButtonSb title ="Sgin Up" />
         </div>  
            </form> 
        </div>
    );
}

export default SignUp;
