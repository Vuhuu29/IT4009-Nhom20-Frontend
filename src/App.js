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

function App() {
  const [show, setShow] = useState(true)
  const [notis, setNotis] = useState([])
  const [hideNotis, setHideNotis] = useState([])

  const addNoti = (n) => {
    setNotis([...notis, n])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/auth" element={<LoginRegisterScreen />} />
          <Route path="/bill" element={<BillScreen />} />
          <Route path="/covenant" element={<CovenantScreen />} />
          <Route path="/finance" element={<FinanceScreen />} />
          <Route path="/incident" element={<IncidentScreen />} />
          <Route path="/rentinghouse" element={<RentingHouseScreen />} />
          <Route path="/account" element={<AccountScreen />} />
          <Route path="/rentingroom" element={<RentingRoomScreen />} />
          <Route path="/services" element={<ServiceScreen />} />
          <Route path="/deposit" element={<DepositScreen />} />
          <Route path="/renter" element={<RenterScreen />} />
          <Route path="/client/" element={<LayoutRenter />}>
            <Route path="/client/" element={<DashbroadRenter />} />
            <Route path="/client/room" element={<Myhouse />} />
            <Route path="/client/bill/" element={<MyBill />} />
          </Route>
          <Route path="*" element={<NotFoundScreen />} />


        </Routes>
      </BrowserRouter>
      {(localStorage.getItem('token')) ? 
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomeScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/auth" element={<LoginRegisterScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/bill" element={<BillScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/covenant" element={<CovenantScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/finance" element={<FinanceScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/incident" element={<IncidentScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/rentinghouse" element={<RentingHouseScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/account" element={<AccountScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/rentingroom" element={<RentingRoomScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/services" element={<ServiceScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/deposit" element={<DepositScreen setShow={setShow} setNoti={addNoti}/>}/>
            <Route path="/renter" element={<RenterScreen setShow={setShow} setNoti={addNoti}/>}/>
          </Routes>
        </BrowserRouter>
        : 
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={
              <HomeScreen setShow={setShow} setNoti={addNoti}/>
            }/>

            <Route path="/auth" element={
              <LoginRegisterScreen setShow={setShow} setNoti={addNoti}/>
            }/>

            <Route path="/bill" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/covenant" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/finance" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/incident" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/rentinghouse" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/account" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/rentingroom" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/services" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/deposit" element={
              <Navigate to="/auth" />
            }/>

            <Route path="/renter" element={
              <Navigate to="/auth" />
            }/>

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
