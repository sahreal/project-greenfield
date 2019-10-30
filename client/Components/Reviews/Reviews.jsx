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
    if (idx >= 0) {
      let new_filter_array = this.state.filterArray;
      new_filter_array.splice(idx, 1);

      this.setState({ filterArray: new_filter_array });
    } else {
      let new_array = this.state.filterArray;
      new_array.push(star);
      this.setState({ filterArray: new_array });
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
        <Grid container spacing={3}>
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
