import React from 'react';
import logo from './logo.svg';
import './App.css';
import NetworkDiagram from "./components/networkDiagram";
function App() {
  return (
    <div className="App">
      <div className="watermark">Done by Valentyn Stets</div>
      <NetworkDiagram />
    </div>
  );
}

export default App;
