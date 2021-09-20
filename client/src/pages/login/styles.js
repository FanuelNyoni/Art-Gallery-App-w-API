import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  login: {
    height: "100vh",
    display: "flex",
    width: "100%",
    background: `url(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?cs=srgb&dl=pexels-oleg-magni-1005644.jpg&fm=jpg) no-repeat center fixed`,
    backgroundSize: 'cover',
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },

  loginTitles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderBottom: "1px solid #444",
    padding: theme.spacing(1),
  },

  loginTitle1: {
    fontFamily: "Rampart One, cursive",
    fontWeight: 900,
    fontSize: "40px",
    display: "flex",
    color: "#fff",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      fontSize: "150%",
    },   
  },

  loginTitle2: {
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#EE1D51",
    [theme.breakpoints.down("xs")]: {
      fontSize: "120%",
    },
  },

  loginForm: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.shape.borderRadius,
    background: "rgba(0, 0, 255, 0.1)",
    backgroundSize: "cover",
    color: "white",
    width: "100%"
  },

  formArea: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: "center",
  },

  formItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  labels: {
    color: "rgba(0, 153, 255)",
    marginBottom: theme.spacing(1),
  },

  loginInput: {
    color: "black",
    width: "100%",
    padding: theme.spacing(1),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "none",
    "&:Focus": {
      outline: "none",
      backgroundColor: "rgba(255, 255, 255)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70%",  
      margin: "0 auto"
    },
  },

  loginBtn: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: 900,
    backgroundColor: "rgba(0, 66, 112)",
    width: "20%",
    padding: theme.spacing(1),
    color: "white",
    borderRadius: theme.shape.borderRadius,
    border: "none",
    [theme.breakpoints.down("xs")]: {
      width: "50%",  
      margin: "0 auto"
    },
    "&:hover":{
      backgroundColor: "rgba(0, 153, 255)",
    },
  },

}));

export default useStyles