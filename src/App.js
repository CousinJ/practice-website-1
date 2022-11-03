import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import React, {useState} from 'react'
import LargeImage from "./components/LargeImage";


function App() {
  return (
    <div className="App">
   <Topbar></Topbar>
   <Navbar></Navbar>
   <LargeImage></LargeImage>
   
    </div>
  );
}

export default App;
