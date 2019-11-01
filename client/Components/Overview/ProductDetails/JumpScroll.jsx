import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

// var options = {
//   activeClass: "active",
//   spy: true,
//   smooth: true,
//   hashSpy: true,
//   offset: 50,
//   duration: 500,
//   delay: 1000,
//   isDynamic: true
// };
// var scroll = Scroll.animateScroll;
// scroll.scrollTo(100, options);

function JumpScroll({ reviewList }) {
  return (
    <div className="readReviews">
      <div onClick={() => scroll.scrollTo(500)}>
        Read {reviewList.length} Reviews
      </div>
    </div>
  );
}

export default JumpScroll;
