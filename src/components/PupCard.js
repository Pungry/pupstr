import React from "react";
import API from "../utils/API"

class PupCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.getRandomDog();
    }
  handleLike = ()=>{
      this.props.clearMessage();
    let match = (Math.random()<0.2);
    if(match){
        console.log("It was a match!");
        this.props.addFriend();
    }
    this.getRandomDog();
  }

  handleDislike = ()=>{
    this.props.clearMessage();
    this.getRandomDog();
  }

  getRandomDog = () => {
    this.startLoading();
    API.random().then(res=>{
        console.log(res.data.message);
        this.setState({image: res.data.message, loading: <></>})
    })
  }

  startLoading = () => {
    this.setState({
      image: "https://via.placeholder.com/500.png?text=Loading...",
      loading: (
        <div className="spinner-border loading"></div>
      )
    })
  }

  render() {
    return (
      <div className="card">
        <img className="img-thumbnail" src={this.state.image} alt="Possible new friend" />
        {this.state.loading}
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
