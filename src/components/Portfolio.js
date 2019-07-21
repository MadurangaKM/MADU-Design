import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    background: "linear-gradient(to right, #B5AC49, #3CA55C)",
    height: "100vh"
  }
};

function PortfolioSection(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
PortfolioSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioSection);
