// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './pages/login';
import TokenBalance from './components/erc20-tokens/token-balance';
import UserInfo from './components/wallet';
// import Home from './pages/home';
// import './styles.css';

// function App() {
//   const [account, setAccount] = useState<string | null>(localStorage.getItem('user'));

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React asdas
//         </a>
//         {/* <Login setAccount={setAccount} /> */}
//       </header>
//     </div>
//   );
  
// }

function App() {
  const [account, setAccount] = useState<string | null>(localStorage.getItem('user'));
  // return !account ? <Login setAccount={setAccount} /> : <Home setAccount={setAccount} />;
  return !account ? <Login setAccount={setAccount} /> : <UserInfo setAccount={setAccount}/>;
}

export default App;
