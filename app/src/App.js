//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import FirstStep from './components/firststep/FirstStep';
import SecondStep from './components/secondstep/SecondStep';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateContract from './components/createcontract/CreateContract';
import Summary from './components/summary/summary';

function App() {
  return (
    <>
    <header/>
    <div className="App">
        <Routes>
          <Route path='/' element={<FirstStep />}></Route>
          {/* <Route path='/second' element={<SecondStep />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path="/createcontract" element={<CreateContract />}></Route>
          {/* <Route path="/summary" element={<Summary />}></Route> */}
        </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </>
  );
}

export default App;
