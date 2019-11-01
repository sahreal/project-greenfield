import React from "react";
import Grid from "@material-ui/core/Grid";
import ReviewListContainer from "../../containers/ReviewListContainer.jsx";
import ReviewMetaContainer from "../../containers/ReviewMetaContainer.jsx";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterOn: false, filterArray: [] };
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleClickRating = this.handleClickRating.bind(this);
  }
  handleClickRating(star) {
    let idx = this.state.filterArray.indexOf(star);
    console.log(idx);
    if (idx >= 0) {
      let new_filter_array = this.state.filterArray.slice();
      new_filter_array.splice(idx, 1);
      this.setState({ filterArray: new_filter_array });
    } else {
      let new_array = this.state.filterArray.slice();
      new_array.push(star);
      console.log("add new filter", new_array);
      this.setState({ filterArray: new_array, filterOn: true }, () => {
        console.log(this.state.filterArray, this.state.filterOn);
      });
    }
    if (this.state.filterArray.length === 0) {
      this.setState({ filterOn: false });
    } else {
      this.setState({ filterOn: true });
    }
  }
  handleClearFilter() {
    this.setState({ filterOn: false, filterArray: [] });
  }
  render() {
    return (
      <div className="reviews">
        <h5 className="review-title">Ratings & Reviews</h5>
        <Grid container>
          <Grid item xs={4}>
            <ReviewMetaContainer
              handleClearFilter={this.handleClearFilter}
              handleClickRating={this.handleClickRating}
              filterOn={this.state.filterOn}
            />
          </Grid>
          <Grid item xs={8}>
            <ReviewListContainer
              filterOn={this.state.filterOn}
              filterArray={this.state.filterArray}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Reviews;
