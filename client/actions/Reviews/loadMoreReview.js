const loadMoreReview = () => {
  return function thunk(dispatch) {
    return axios
      .get(`http://18.223.1.30/reviews/${product_id}/list`, {
        params: { count: 2, sort: "relevant" }
      })
      .then(({ data }) => {
        console.log(data);
        return data.results;
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export default loadMoreReview;
