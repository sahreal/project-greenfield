import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

const StyleSelectorItem = props => {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt={props.index.toString()}
        src={props.imageThumbnail}
        className={classes.bigAvatar}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default StyleSelectorItem;
