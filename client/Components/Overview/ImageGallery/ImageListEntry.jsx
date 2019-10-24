import React from "react";
import getProductData from "../../../actions/Overview/getProductData";

const ImageListEntry = ({ imageThumbnail }) => {
  return (
    <div>
      <img src={imageThumbnail} />
    </div>
  );
};

export default ImageListEntry;
