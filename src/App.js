import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import {getData} from "./actions"

function App() {
  const data = useSelector((state) => state.dataState)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(getData())}>Get data</button>
        <div>Hello {data}!</div>
      </header>
    </div>
  );
}

export default App;
