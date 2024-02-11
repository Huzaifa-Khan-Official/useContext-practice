import './App.css';
import Counter from './context/context';
import { useContext, useState } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Router from './router/router';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <Counter.Provider value={{ counter, setCounter }}>
        <Router />
      </Counter.Provider>
    </>


  );
}

export default App;