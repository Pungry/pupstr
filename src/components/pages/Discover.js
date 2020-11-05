import React from "react";
import PupCard from "../PupCard.js"

class Discover extends React.Component {
  constructor(props){
    super(props);
    this.state = {friends: 0, message: <h3></h3>};
  }

  addFriend = () => {
    this.setState({
      friends: this.state.friends+1,
      message: <h3>You matched with a friend!</h3>
    })
  }

  clearMessage = () => {
    this.setState({
      message: <h3></h3>
    })
  }

  render() {
    return (
      <div className="text-center row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h1>Make New Friends</h1>
          <p>Thumbs up on any pup you'd like to meet!</p>
          <PupCard addFriend={this.addFriend} clearMessage={this.clearMessage}/>
          <h3>Friends made so far: {this.state.friends}</h3>
          {this.state.message}
        </div>
      </div>
    )
  }
}

export default Discover;
