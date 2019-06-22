import React from 'react';
import logo from './logo.svg';
// import './App.css';
import '../src/Components/ProgressBars/css/ProgressBar.css'
import Header from '../src/Components/Header/Header.jsx'
import ProgressBarExample from '../src/Components/ProgressBars/ProgressBar.jsx'

function App() {
  return (
    <div className="App">
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
      <ProgressBarExample></ProgressBarExample>
    </div>
  );
}

export default App;
