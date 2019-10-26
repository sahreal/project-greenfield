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

const StyleSelectorItem = ({ imageThumbnail, handleStyleClick }) => {
  const classes = useStyles();
  return (
    <div onClick={() => console.log(handleStyleClick, "WOW")}>
      <a>
        <Avatar
          src={imageThumbnail}
          className={classes.bigAvatar}
          onClick={() => handleStyleClick(image)}
        />
      </a>
    </div>
  );
};

export default StyleSelectorItem;
