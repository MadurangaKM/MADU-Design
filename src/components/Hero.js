import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Images from "../assets/js/images"

import "./custom.css";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  logo:{
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "425px"
  }
}));
export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const ui = useSelector(state => state.ui);
  const bgDiv = ui.drakMode ? (
    <div className="dark_bg">
      <img src={Images.HeroLogo} alt="logo" className={classes.logo}/>
      <span className="icon-scroll"></span>
    
    </div>
  ) : (
    <div className="light_bg">
        <img src={Images.HeroLogo} alt="logo" className={classes.logo}/>
        <span className="icon-scroll"></span>
    </div>
  );
  return <div className={classes.root}>{bgDiv}
  
  </div>;
}
