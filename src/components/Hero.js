import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Images from "../assets/js/images"
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';
import Typist from 'react-typist';


import "./custom.css";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  logo:{
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "340px",
    paddingTop: 150
  },
  slogon:{
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "x-large",
    fontWeight:"300",
    textAlign:"center"
  },
  button:{
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 40,
    background: "linear-gradient(126deg, #FFA002 0%, #FF6701 100%)",
    boxShadow: "none",
    marginTop: 20,
    height: 46,
    width: 160,
    letterSpacing: 1

  }
}));
export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const ui = useSelector(state => state.ui);
  const bgDiv = ui.drakMode ? (
    <div className="dark_bg">
      <img src={Images.HeroLogoDrak} alt="logo" className={classes.logo}/>
      <span className={classes.slogon} style={{color: "#ffff"}}>Empowering Businesses through UX Solutions</span>
        <Button variant="contained" color="primary" className={classes.button}>
        Contact Us
      </Button>
      <span className="icon-scroll"></span>
      <Particles
                height={300}
    params={{
       
	    "particles": {
	        "number": {
	            "value": 20
	        },
	        "size": {
	            "value": 1
          },
         
          
      },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
        },
       
	}} />
      
    
    </div>
  ) : (
    <div className="light_bg">
        <img src={Images.HeroLogo} alt="logo" className={classes.logo}/>
        <Typist delay={200} >
        <span className={classes.slogon}>Empowering Businesses through UX Solutions</span>
        </Typist>
        <Button variant="contained" color="primary" className={classes.button}>
        Contact Us
      </Button>
        <span className="icon-scroll"></span>
       <Particles
                height={300}
               
    params={{
       
      "particles": {
        "number": {
            "value": 20,
            
        },
        "size": {
          "value": 1
      },
       
      
        "line_linked": {
            "enable": true,
            "distance": 200, //The radius before a line is added, the lower the number the more lines.
            "color": "#333333",
            "opacity": 0.5,
            "width": 1
        },
       
    },
  //Negate the default interactivity
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
  },
   
  
       
	}} />
      
      
    </div>
  );
  return <div className={classes.root}>{bgDiv}
  
  </div>;
}
