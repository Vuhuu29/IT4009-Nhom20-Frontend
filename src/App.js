// import logo from "./logo.svg";
import "./App.css";
//import Rout from "./rout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/auth" element={<LoginRegisterScreen />}/>
        <Route path="/bill" element={<BillScreen />}/>
        <Route path="/covenant" element={<CovenantScreen />}/>
        <Route path="/finance" element={<FinanceScreen />}/>
        <Route path="/incident" element={<IncidentScreen />}/>
        <Route path="/rentinghouse" element={<RentingHouseScreen />}/>
        <Route path="/account" element={<AccountScreen />}/>
        <Route path="/rentingroom" element={<RentingRoomScreen />}/>
        <Route path="/services" element={<ServiceScreen />}/>
        <Route path="/deposit" element={<DepositScreen />}/>
        <Route path="/renter" element={<RenterScreen />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
