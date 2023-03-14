import React from "react";
import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img
          src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
          alt="Amazon Logo"
        />
      </nav>
    </header>
  );
};

export default Topbar;
