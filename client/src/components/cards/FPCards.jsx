import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fireIcon =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12f281ab-b5b6-467f-aa16-5f1c729a58fa/dalqqy4-6f334cc1-d8dc-4bbd-99f0-211542c0b476.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyZjI4MWFiLWI1YjYtNDY3Zi1hYTE2LTVmMWM3MjlhNThmYVwvZGFscXF5NC02ZjMzNGNjMS1kOGRjLTRiYmQtOTlmMC0yMTE1NDJjMGI0NzYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DCNoavAhvOoGY_qQFgWo7AmD06-tnUtxd-Kl6KrMo5E";
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card className={classes.loginCard}>
        <CardMedia>{props.media}</CardMedia>
        <CardContent className={classes.ccWrapper}>
          <h3 className={classes.cardHeader}>
            Anyone can get it!!
            <img className={classes.fireImg} src={fireIcon} />
          </h3>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur esse, animi dignissimos minima cupiditate eum, magni
            deleniti fugiat fuga delectus ea et omnis perferendis? Facere
            necessitatibus voluptatibus deserunt? Perspiciatis molestias
            pariatur ex, veritatis corporis earum molestiae labore, repellat
            dolor aperiam, omnis delectus accusamus enim odit eligendi
            asperiores odio quos autem porro nemo magnam sunt! Consequuntur nemo
            quisquam ab fuga nostrum at non commodi quibusdam dolor error, qui
            aut iure sed rerum molestiae tenetur facilis quam facere assumenda
            eveniet possimus reprehenderit cum a illo. Neque dignissimos, hic
            cum sequi, quod cumque dicta quidem, autem adipisci laboriosam
            eveniet vero impedit atque perspiciatis!
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.ccWrapper}>{props.sidebar}</CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <div
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.expandIcon} />
          </div>
        </CardActions>
      </Card>
    </>
  );
}
