import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../../utils/API";

class Search extends Component {
  // state = {
  //   search: "",
  //   results: [],
  //   breeds: []
  // };

  // // When this component mounts, search the Giphy API for pictures of kittens
  // componentDidMount() {
  //   this.searchGiphy("puppies")
    
  // }

  // searchGiphy = query => {
  //   API.search(query)
  //     .then(res => this.setState({ results: res.data.data }))
  //     .catch(err => console.log(err));
  // };

  // handleInput = event => {
   
  //   this.setState({
  //     search: event.target.value
  //   });
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
    
  //   API.search(this.state.search)
  //     .then(res => this.setState({ results: res.data.message }))
  //     .catch(err => console.log(err));
  // };

  // render() {
  //   return (
  //     <div>
  //       <SearchForm
  //         search={this.state.search}
  //         handleFormSubmit={this.handleFormSubmit}
  //         handleInputChange={this.handleInputChange}
  //         breeds={this.state.breeds}
  //       />
  //       <ResultList results={this.state.results} />
  //     </div>
  //   );
  // }
}

export default Search;
