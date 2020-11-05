import React from "react";
import PupCard from "../PupCard.js"

class Discover extends React.Component {
  constructor(props){
    super(props);
    this.state = {friends: 0};
  }

  addFriend = () => {
    this.setState({friends: this.state.friends+1})
  }

  render() {
    return (
      <div className="text-center row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h1>Make New Friends</h1>
          <p>Thumbs up on any pup you'd like to meet!</p>
          <PupCard addFriend={this.addFriend}/>
          <p>Friends made so far: {this.state.friends}</p>
        </div>
      </div>
    )
  }
}

export default Discover;
