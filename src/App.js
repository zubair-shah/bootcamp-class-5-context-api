import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Parent from './parent.js';
import CounterContext from './countercontext';
import Header from './Haider';
import Main from './Main';

function App() {
  // let [count, setCount] = useState(30);
  const themeHook = useState("light")
  return (
    <CounterContext.Provider value={themeHook}>
    <div >
      {/* <Parent name="zubair" /> */}
      <Header />
      <Main />
        
    </div>
    </CounterContext.Provider>
  );
}

export default App;
