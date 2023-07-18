import NotLoginHomeScreen from "../components/NotLoginHomeScreen";
import LoggedHomeScreen from "../components/LoggedHomeScreen";
import React from 'react'


export default function HomeScreen(props){

  if (localStorage.getItem("token") && localStorage.getItem("userRole") == "renter") {
    
      window.location = "/client/"

  } else
    return (
      <>
        {localStorage.getItem("token") ? <LoggedHomeScreen toastNoti={props.toastNoti} /> : <NotLoginHomeScreen />}
      </>
    )
}