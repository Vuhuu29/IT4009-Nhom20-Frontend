import React, { useState } from 'react';
import LoginFormComponent from "../components/LoginForm";
import RegisterFormComponent from "../components/RegisterForm";

export default function LoginRegisterScreen(props){
  const [checkLogin, setCheckLogin] = useState(true)

    // check token exist or not to redirect to home screen
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("userRole") == "owner")
        window.location = "/";
      else if (localStorage.getItem("userRole") == "renter")
        window.location = "/client";
      // check role of user to redirect to correct screen
    } else
  
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