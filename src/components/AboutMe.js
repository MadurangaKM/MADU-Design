import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
    height: "100vh"
  }
};

function aboutSection(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
aboutSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(aboutSection);
