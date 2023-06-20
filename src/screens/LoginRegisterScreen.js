import React, { useState } from 'react';
import LoginFormComponent from "../components/LoginForm";
import RegisterFormComponent from "../components/RegisterForm";

export default function LoginRegisterScreen(props){
  const [checkLogin, setCheckLogin] = useState(true)
  return (
    <>
      {checkLogin ?
        <LoginFormComponent
            checkLogin={checkLogin}
            setCheckLogin={setCheckLogin}     
        /> :
        <RegisterFormComponent
            checkLogin={checkLogin}
            setCheckLogin={setCheckLogin}
        />
      }
    </>
    
  )
}