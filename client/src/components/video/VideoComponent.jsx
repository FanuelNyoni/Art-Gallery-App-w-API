import { useEffect } from "react";
import useStyles from "./styles";

const VideoComponent = () => {
  //https://player.vimeo.com/external/530747374.hd.mp4?s=03294b6eaf330d76ce27ee9eb1d0a9441a30a307&profile_id=172&oauth2_token_id=57447761

  const classes = useStyles();

  /**
 * 
  let videos = new Array(
    "https://player.vimeo.com/external/530747374.hd.mp4?s=03294b6eaf330d76ce27ee9eb1d0a9441a30a307&profile_id=172&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/473861889.sd.mp4?s=3d04079edbfff30af1e4c04b9b0a3790b10ac349&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/504613102.sd.mp4?s=470fc70435c6fac3da6881918c59f3b92f02bdb4&profile_id=165&oauth2_token_id=57447761"
  );
 * 
 *   function selectVideo() {
    let randomNum = Math.floor(Math.random() * videos.length);

    let src = videos[randomNum];

    return src;
  };

  useEffect(() => {
    selectVideo()
  })
 */

  return (
    <div className={classes.videoComponent}>
      <video
        className={classes.videoPlayer}
        autoPlay
        loop
        src="https://player.vimeo.com/external/504570222.sd.mp4?s=78304b4996261256e5437ce2030d06411cd56840&profile_id=139&oauth2_token_id=57447761"
      ></video>
    </div>
  );
};

export default VideoComponent;
