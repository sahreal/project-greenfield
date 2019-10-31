import React from "react";
//import getProductData from "../../../actions/Overview/getProductData";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./ImageGallery.css";

const useStyles = makeStyles({
  imageList: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 0
  }
});

const ImageListEntry = props => {
  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt={props.index.toString()}
        src={props.imageThumbnail}
        className={classes.imageList}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default ImageListEntry;
