import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import React, { useState } from "react";
import LargeImage from "./components/LargeImage";
import LargeButton from "./components/LargeButton";
import SmallImage from "./components/SmallImage";
import SmallButton from "./components/SmallButton";
import FeatureBar from "./components/FeatureBar";

const imageList = [
  "",
  "",
];

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>

      <div className="content-container-1">
        <LargeImage imageUrl={imageList[0]}></LargeImage>
        <LargeImage imageUrl={imageList[1]}></LargeImage>
        <div className="button-container-1">
          <LargeButton></LargeButton>
        </div>
        <div className="button-container-2">
          <LargeButton></LargeButton>
        </div>
      </div>

      <div className="content-container-2">
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
      </div>

      <FeatureBar></FeatureBar>

      <div className="content-container-2">
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
        <SmallImage></SmallImage>
      </div>
    </div>
  );
}

export default App;
