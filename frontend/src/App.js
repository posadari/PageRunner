import logo from './logo.svg';
import './App.css';
import WebGazer from './WebGazer';
import Book from './Book';
import Read from './ReadFile.js'
import Click from './Calibration';
import {useState} from 'react';
import Book1 from './Book1';

function App() {
  console.log('here')
  // const [toggle, setToggle] = useState(true);
  return (
    <>
      {/* {toggle ? <Click /> : <Book />} */}
    
    {/* <button onClick={() => {setToggle(!toggle)}}>Calibrate</button> */}
    {/* <Click/> */}
      <Book />
      {/* <WebGazer /> */}
      {/* <Read /> */}
    </>
  );
}

export default App;
