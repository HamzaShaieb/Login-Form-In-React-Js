import React from 'react';
import styles from './Login_Form.module.css';
import Globalestyles from '../../../Styles_class/Class1.module.css'
import Input from '../../Small_Component/Inputes/Input';
import ButtonSb from '../../Small_Component/Buton_Submit/Button_sb';
import TitleText from '../../Small_Component/Text_Title/TitleText';
import SignUp from '../Sign_From/Sign_up';
import { Link ,Outlet } from 'react-router-dom';



const loginForm = (props) => {
    
    return (
      <div className={Globalestyles.container}> 
            <TitleText textcontent="Sign In" />
              <form className={styles.inputes}> 
              <Input pl ="UserName" typeinput="text" />
              <Input pl ="Password" typeinput="password" marg="auto auto 30px auto"  />
              <div className={styles.smalltext}>
                <Link to="/Forget_Password" className={styles.link}>Forget Password ?</Link>
                <Link to="/sin_Up" className={styles.link} >Sign Up</Link>
              </div>
              <div>
              <ButtonSb title ="Sign In" />
              </div>
              
            </form> 
      </div>
    );
}

export default loginForm;

