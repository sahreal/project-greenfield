// // /products/:product_id/styles

// import axios from "axios";
// import changeRating from "./changeRating.js";

// const getImages = product_id => {
//   return function thunk(dispatch) {
//     axios
//       .get(`http://18.223.1.30/products/${product_id}/styles`)
//       .then(({ data }) => {
//         let ratings = Object.values(data.results);
//         console.log(ratings);
//         let rating =
//           ratings.reduce((partial_sum, a) => partial_sum + a, 0) /
//           ratings.length;
//         let avg_rating = Math.round(rating * 10) / 10;
//         console.log(avg_rating);
//         dispatch(changeRating(avg_rating));
//       });
//   };
// };

// export default getImages;
