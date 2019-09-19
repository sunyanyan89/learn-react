import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from "./components/NameCard"
import LikesButton from "./components/LikesButton"

const tags = ['追星一族', 'girl', 'boy', '有礼貌']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
      {/* <NameCard name="yanyan" number={1234567890} tags={tags}/> */}
      <LikesButton />
    </div>
  );
}

export default App;
