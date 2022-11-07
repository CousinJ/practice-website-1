import React, { useState } from "react";
import Dropdown from "./Dropdown";



function Navbar() {


  const navData = [
    { linkName: "Home", content: ['events', 'friends', 'my profile', 'other', 'more things', 'contest', 'magazine'], order: 1},
    { linkName: "Women", content: ['pants', 'shirts', 'bags', 'other'], order: 2 },
    { linkName: "Men", content: ['pants', 'shirts', 'belts', 'other'], order: 3 },
    { linkName: "Trending", content: ['events', 'friends', 'my profile', 'other'], order: 4},
  ];
  const [styleObject, setStyleObject] = useState({});
const [content, setContent] = useState([])





  function NavLink(props) {
    const navClicker = () => {
      console.log("clicked");
     
      
      setStyleObject({ transform: `translateY(-12px)`, opacity: "1" });
    };

    return (
      <div
        onClick={() => {
            
            
          if (styleObject.opacity === "1") {
            setStyleObject({ opacity: "0" });
          } else {
            navClicker();
            setContent(props.data.content)
            
          }
        }}
        className="nav-link"
      >
        <h4>{props.data.linkName}</h4>
      </div>
    );
  }
  return (
    <div>
      <div className="navbar-container">
        <NavLink  data={navData[0]} />
        <NavLink   data={navData[1]} />
        <NavLink    data={navData[2]} />
        <NavLink  data={navData[3]} />
      </div>
      <Dropdown content={content} styleObject={styleObject}></Dropdown>
    </div>
  );
}

export default Navbar;
