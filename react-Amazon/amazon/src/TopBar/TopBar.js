import React from "react";
import classes from "./TopBar.module.css";

function TopBar(props) {
  return (
    <div>
      <nav className={classes.Topbar}>
        <img
          src="https://www.chooseyourcareer.in/wp-content/uploads/2022/06/Amazon-1.jpg"
          alt="amazon logo"
        ></img>
      </nav>
    </div>
  );
}

export default TopBar;
