

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Componentes/Pages/Login_Form/Login_Form'
import ForgrtForm from './Componentes/Pages/Forget_Form/Forgrt_Form';
import SignUp from './Componentes/Pages/Sign_From/Sign_up';

import './App.css'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element ={<LoginForm/>}/>
      <Route path='/sin_Up' element ={<SignUp/>} />
      <Route path='/Forget_Password' element ={<ForgrtForm/>} />
     </Routes>
    </BrowserRouter>
   

  
  )
}

export default App;
