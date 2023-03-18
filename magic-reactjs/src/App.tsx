// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './pages/login';
// import Home from './pages/home';
import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  const [account, setAccount] = useState<string | null>(localStorage.getItem('user'));
  // return !account ? <Login setAccount={setAccount} /> : <Home setAccount={setAccount} />;
  return !account ? <Login setAccount={setAccount} /> : <Login setAccount={setAccount} />;
}


export default App;
