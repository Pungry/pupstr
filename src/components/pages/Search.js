import React, { Component } from "react";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    breeds: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchPups("corgi")
    this.getBreeds();
  }

  searchPups = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.error(err));
  };

  getBreeds = () => {
    API.getBreeds()
      .then(res => this.setState({breeds: res.data.message }))
      .catch(err => console.error(err));
  }

  handleInputChange = event => {
   
    this.setState({
      search: event.target.value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();

    if(this.state.breeds.includes(this.state.search)){
      API.search(this.state.search)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.log(err));
    } else {
      this.setState({results: []});
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Search;
