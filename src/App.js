import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router';
import BillScreen from "./screens/BillScreen";
import CovenantScreen from "./screens/CovenantScreen";
import FinanceScreen from "./screens/FinanceScreen";
import HomeScreen from "./screens/HomeScreen";
import IncidentScreen from "./screens/IncidentScreen";
import RentingHouseScreen from "./screens/RentingHouseScreen";
import AccountScreen from "./screens/AccountScreen";
import LoginRegisterScreen from "./screens/LoginRegisterScreen";
import RentingRoomScreen from "./screens/RentingRoomScreen";
import ServiceScreen from "./screens/ServicesScreen";
import DepositScreen from "./screens/DepositScreen";
import RenterScreen from "./screens/RenterScreen";
import LayoutRenter from "./screens/Client/layout/LayoutRenter";
import DashbroadRenter from "./screens/Client/dashbroad/DashbroadRenter";
import Myhouse from "./screens/Client/myhouse/Myhouse";
import MyBill from "./screens/Client/bill/bill";
import My404Component from "./screens/NotFoundScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { useState } from "react";
import { Toast } from "react-bootstrap";
import NarBar from "./components/NavBar";

function App() {
  const [show, setShow] = useState(true)
  const [notis, setNotis] = useState([])
  const [hideNotis, setHideNotis] = useState([])

  const toastNoti = (n) => {
    setNotis([...notis, n])
    setShow(true)
  }

  return (
    <div className="App">
      {(localStorage.getItem('token')) ? 
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={
              <>
                <NarBar/>
                <HomeScreen toastNoti={toastNoti}/>
              </>
              }/>
            <Route path="/bill" element={
              <>
                <NarBar/>
                <BillScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/covenant" element={
              <>
                <NarBar/>
                <CovenantScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/finance" element={
              <>
                <NarBar/>
                <FinanceScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/incident" element={
              <>
                <NarBar/>
                <IncidentScreen toastNoti={toastNoti}/>
              </>
              }/>
            <Route path="/rentinghouse" element={
              <>
                <NarBar/>
                <RentingHouseScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/account" element={
              <>
                <NarBar/>
                <AccountScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/rentingroom" element={
              <>
                <NarBar/>
                <RentingRoomScreen toastNoti={toastNoti}/>
              </>
              }/>
            <Route path="/services" element={
              <>
                <NarBar/>
                <ServiceScreen toastNoti={toastNoti}/>
              </>
            }/>
            <Route path="/deposit" element={
              <>
                <NarBar/>
                <DepositScreen toastNoti={toastNoti}/>
              </>
              }/>
            <Route path="/renter" element={
              <> 
                <NarBar/>
                <RenterScreen toastNoti={toastNoti}/>
              </>
              }/>


            <Route path="/client/" element={<LayoutRenter toastNoti={toastNoti}/>}>
              <Route path="/client/" element={<DashbroadRenter toastNoti={toastNoti}/>} />
              <Route path="/client/room" element={<Myhouse toastNoti={toastNoti}/>} />
              <Route path="/client/bill/" element={<MyBill toastNoti={toastNoti}/>} />
            </Route>
            
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </BrowserRouter>
        
        : 
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={
              <HomeScreen toastNoti={toastNoti}/>
            }/>

            <Route path="/auth" element={
              <LoginRegisterScreen toastNoti={toastNoti}/>
            }/>

            <Route path="*" element={<NotFoundScreen />} />

          </Routes>
        </BrowserRouter>}
      
      <div className={"custom-toast " + (show ? "d-block" : "d-none")}>
        {notis && notis.map((noti, i) => (
          <Toast show={ !hideNotis.includes(i) } className="mt-2" style={{backgroundColor: '#d9edf7!important'}}>
            <Toast.Body className="d-flex flex-row"> 
              <div>{noti}</div>  
              <button type="button" class="btn-close ms-auto" data-dismiss="toast"
                onClick={() => {
                  setHideNotis([...hideNotis, i])
                }} >
              </button>
            </Toast.Body> 

          </Toast>
        ))}
        
      </div>
    </div>
  );
}

export default App;
