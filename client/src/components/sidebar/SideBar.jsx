import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';

const SideBar = () => {
  const classes = useStyles();

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);


  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>ABOUT ME</span>
        {/*<img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />*/}
        <video
          className={classes.videoPlayer}
          autoPlay
          loop
          src="https://player.vimeo.com/external/504570222.sd.mp4?s=78304b4996261256e5437ce2030d06411cd56840&profile_id=139&oauth2_token_id=57447761"
        ></video>
        <div className={classes.paragraph}>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>CATEGORIES</span>
        <ul className={classes.sidebarList}>
        {cats.map((c) => (
            <a href={`/?cat=${c.name}`} className={classes.link}>
            <li className={classes.sidebarListItem}>{c.name}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className={classes.sidebarItem}>
        <span className={classes.sidebarTitle}>FOLLOW US</span>
        <div className={classes.sidebarSocial}>
          <FacebookIcon className={classes.sidebarIcon}></FacebookIcon>
          <TwitterIcon className={classes.sidebarIcon}></TwitterIcon>
          <InstagramIcon className={classes.sidebarIcon}></InstagramIcon>
          <PinterestIcon className={classes.sidebarIcon}></PinterestIcon>
          <WhatsAppIcon className={classes.sidebarIcon}></WhatsAppIcon>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
