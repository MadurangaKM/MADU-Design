import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100vh"
  }
};

function heroSection(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
heroSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(heroSection);
