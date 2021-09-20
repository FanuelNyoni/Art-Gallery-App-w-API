import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  frontPage: {
    height: "100%",
    display: "flex",
    width: "100%",
    backgroundImage: "url(https://images.unsplash.com/photo-1631473128064-d9e62552545c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80)",
    flexDirection: "column",
  },

  fpsection1: {
    [theme.breakpoints.up("md")]: {
      flex: "70%",
    }
  },

  fpsection2: {
    [theme.breakpoints.up("md")]: {
      flex: "30%",
    }
  },
}));

export default useStyles;
