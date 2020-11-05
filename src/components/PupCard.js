import React from "react";

class PupCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.getRandomDog();
    }
  handleLike = ()=>{
    let match = (Math.random()<0.2);
    if(match){
        console.log("It was a match!");
        this.props.addFriend();
    }
    this.getRandomDog();
  }

  handleDislike = ()=>{
    this.getRandomDog();
  }

  getRandomDog() {
    let x = Math.floor(Math.random()*19+5)*100;
    this.setState({image: `http://placekitten.com/${x}/${x}` });
  }

  render() {
    return (
      <div className="card">
        <img className="img-thumbnail" src={this.state.image} alt="Possible new friend" />
        <button className="btn btn-danger dislike-btn" onClick={this.handleDislike}>
            <i className="fas fa-thumbs-down"></i>
        </button>
        <button className="btn btn-success like-btn" onClick={this.handleLike}>
            <i className="fas fa-thumbs-up"></i>
        </button>
      </div>
    )
  }
}

export default PupCard;
