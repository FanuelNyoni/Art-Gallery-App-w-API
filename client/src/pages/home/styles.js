import { makeStyles } from '@material-ui/core';
import img from '../../assets/wallpaper.jpg';

const useStyles = makeStyles((theme) => ({
    home: {
        height: "100%",
        backgroundImage: `url(https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=format)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
          display: "flex",
          flexDirection: "column"
      },
}));

export default useStyles