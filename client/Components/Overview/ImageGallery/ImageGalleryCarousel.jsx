import React from "react";
import Carousel from "react-image-gallery";
//import Container from "@material-ui/core/Container";

const ImageCarousel = props => {
  return <Carousel items={images} />;
};

//import ImageList from "./ImageList";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//     imageSet: [
//       {
//         srcSet: `https://picsum.photos/id/1018/250/150/`,
//         media: "(max-width: 1090px)"
//       }
//     ]
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//     imageSet: [
//       {
//         srcSet: `https://picsum.photos/id/1018/250/150/`,
//         media: "(max-width: 1090px)"
//       }
//     ]
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//     imageSet: [
//       {
//         srcSet: `https://picsum.photos/id/1018/250/150/`,
//         media: "(max-width: 1090px)"
//       }
//     ]
//   }
// ];

// const ImageGalleryCarousel = ({ productData, id, handleClick }) => {
//   console.log(productData, "TEst");

//   let mapper = arr => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       let obj = {
//         original: arr[i].url,
//         thumbnail: arr[i].thumbnail_url
//       };
//       result.push(obj);
//     }
//     return result;
//   };

//   let images = mapper(productData);
//   console.log(images, "HUHUHHUHUHH");

export default ImageCarousel;
