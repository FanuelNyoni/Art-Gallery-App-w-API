import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import useStyles from "./styles";

const ImgCarousel = () => {
  const classes = useStyles();

  const images = [
    {
      src: "https://images.pexels.com/photos/6114981/pexels-photo-6114981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    { 
      src: "https://images.unsplash.com/photo-1552429428-a0a5636e084c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
    },
    {
      src: "https://images.pexels.com/photos/6115019/pexels-photo-6115019.jpeg?cs=srgb&dl=pexels-vlada-karpovich-6115019.jpg&fm=jpg"
    },
  ];

  return (
    <div className={classes.imgSlider1}>
      <Carousel
      className={classes.imgSlider}
      hasThumbnails={false}
      hasIndexBoard={false}
      hasSizeButton={false}
      hasMediaButton={false}
      isAutoPlaying={true} 
      autoPlayInterval={10000} 
      images={images} />
    </div>
  );
};

export default ImgCarousel;
