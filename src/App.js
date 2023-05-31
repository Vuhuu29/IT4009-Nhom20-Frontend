// import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import {getData} from "./actions"
import LoginFormComponent from "./components/login/LoginFormComponent";

function App() {
  const data = useSelector((state) => state.dataState) //dùng để lấy state từ store, dataState ở đây được khai báo trong combineReducers
  const dispatch = useDispatch() //trả về function Dispatch()
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(getData())}>Get data</button>   
        <div>Hello {data}!</div> */}
        <LoginFormComponent/>
      </header>
    </div>
  );
}

export default App;
