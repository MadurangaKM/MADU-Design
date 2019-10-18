import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Images from "../assets/js/images";
import MediaQuery from "react-responsive";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_DRAK_MODE } from "../action-types";

const drawerWidth = 240;
const scrollToRef = ref => window.scrollTo({ top: 0, behavior: "smooth" });
const useMountEffect = fun => useEffect(fun, []);
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    //padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  headerLinks: {
    display: "flex",
    flexDirection: "row"
  },
  logo: {
    width: 150,
    marginTop: 11,
    cursor:"pointer"
  },
  divider: {
    height: 35,
    marginLeft: 6
  }
}));

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const ui = useSelector(state => state.ui);

  const dispatch = useDispatch();
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const myRef = useRef(null);

  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount
  const appBarColor = ui.drakMode
    ? "linear-gradient(100deg, #222222 3%, #21242E 96%)"
    : "#FFFFFF";
  const navLinkColor = ui.drakMode ? "#FFFFFF" : "#333333";
  const logo = ui.drakMode ? Images.logoDark : Images.logoLight;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        style={{ background: appBarColor }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <img src={logo} alt="DevUXeye" className={classes.logo} onClick={() => scrollToRef(myRef)} />
          </Typography>

          <MediaQuery query="(min-width: 850px)">
            <div className={classes.headerLinks}>
              <Button
                className={classes.title}
                onClick={() => scrollToRef(myRef)}
                style={{ color: navLinkColor }}
              >
                Home
              </Button>
              <Button
                className={classes.title}
                onClick={props.onChangePortfolio}
                style={{ color: navLinkColor }}
              >
                Portfolio
              </Button>
              <Button
                className={classes.title}
                onClick={props.onChangeAbout}
                style={{ color: navLinkColor }}
              >
                About Me
              </Button>
              <Button
                className={classes.title}
                onClick={props.onChangeContact}
                style={{ color: navLinkColor }}
              >
                Contact Me
              </Button>
            </div>
            <img
              src={Images.dividerImg}
              alt="divider"
              className={classes.divider}
            />
            <FormGroup row style={{ marginLeft: 20 }}>
              <FormControlLabel
                label="DARK MODE"
                style={{ color: navLinkColor }}
                control={
                  <Switch
                    checked={ui.drakMode}
                    onChange={() => dispatch({ type: CHANGE_DRAK_MODE })}
                    color="Secondary"
                  />
                }
              />
            </FormGroup>
          </MediaQuery>
          <MediaQuery query="(max-width: 850px)">
            <div>
              {" "}
              <IconButton
                style={{ color: navLinkColor }}
                aria-label="Open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </MediaQuery>
        </Toolbar>
      </AppBar>
      <div ref={myRef} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div style={{ background: appBarColor, height: "100%" }}>
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={handleDrawerClose}
              style={{ color: navLinkColor }}
            >
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText
                primary={"Home"}
                onClick={() => scrollToRef(myRef)}
                style={{ color: navLinkColor }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={"Portfolio"}
                onClick={props.onChangePortfolio}
                style={{ color: navLinkColor }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={"About Me"}
                onClick={props.onChangeAbout}
                style={{ color: navLinkColor }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={"Contact Me"}
                onClick={props.onChangeContact}
                style={{ color: navLinkColor }}
              />
            </ListItem>
          </List>
          <FormGroup row style={{ marginLeft: 20 }}>
            <FormControlLabel
              label="DARK MODE"
              style={{ color: navLinkColor }}
              control={
                <Switch
                  checked={ui.drakMode}
                  onChange={() => dispatch({ type: CHANGE_DRAK_MODE })}
                  color="Secondary"
                />
              }
            />
          </FormGroup>
        </div>
      </Drawer>
    </div>
  );
}
