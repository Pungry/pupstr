import React from "react";
import PupCard from "../PupCard.js"

class Discover extends React.Component {
  render() {
    return (
      <div className="text-center row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h1>Make New Friends</h1>
          <p>Thumbs up on any pup you'd like to meet!</p>
          <PupCard />
          <p>Friends made so far: 0</p>
        </div>
      </div>
    )
  }
}

export default Discover;
