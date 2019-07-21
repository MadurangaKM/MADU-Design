import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    background: "linear-gradient(to right, #cc2b5e, #753a88)",
    height: "100vh"
  }
};

function ContactSection(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
ContactSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactSection);
