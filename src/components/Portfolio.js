import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Images from "../assets/js/images";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = {
  root: {
    backgroundColor: "#F4F6FD",
    marginTop: "-20px",
  },
  paper: {
    height: 400,
  },
};

function PortfolioSection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div style={{ paddingTop: "70px", textAlign: "center" }}>
        <h1 style={{ height: 17 }}>How Team Can Help?</h1>
        <img src={Images.title} alt="DevUXeye" style={{ width: 321 }} />
      </div>

      <div style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: 60 }}>
        <p style={{ fontWeight: "lighter", fontSize: 20, textAlign: "center" }}>
          We enjoy adapting our strategies to offer every client the best
          solutions
          <br></br>that are at the forefront of the industry.
        </p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
PortfolioSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioSection);
