import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import MovieBox from "./MovieBox";
import Button from "./Button";
import MoviePoster from "./MoviePoster";
import Input from "./Input";
import MovieTitle from "./MovieTitle.js";

const urlForMovie = movie =>
  `https://api.themoviedb.org/3/search/movie?api_key=7d2694a422ae0dca2d8b8711788d5c73&query=${movie}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieData: "jaws" };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
	
  handleKeyPress = event => {
    event.persist();
    if (event.key == "Enter") {
      fetch(urlForMovie(event.target.value))
        .then(data => data.json())
        .then(data => {
          let movie = data.results;
					const titles = [];
          
          movie.map(x => titles.push(x.title));
          const input = event.target.value;
          console.log(titles)
          this.setState({
            movieData: movie
          });
        });
    }
	};
	


  render() {
    return (
      <div className="App">
        <MoviePoster movie={this.state.movieData} />
        <div className="App-right">
          <Input
            movie={this.state.movieData}
            onKeyPress={this.handleKeyPress}
          />
          <MovieTitle movie={this.state.movieData} />
        </div>
      </div>
    );
  }
}

export default App;
