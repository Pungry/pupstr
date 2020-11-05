import React from "react";

class PupCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="img-thumbnail" src="http://placekitten.com/600/600" alt="Possible new friend" />
        <button className="btn btn-danger dislike-btn">
            <i className="fas fa-thumbs-down"></i>
        </button>
        <button className="btn btn-success like-btn">
            <i className="fas fa-thumbs-up"></i>
        </button>
      </div>
    )
  }
}

export default PupCard;
