import React, { Component } from "react";
import "./HelloWorld.css";

class HelloWorld extends Component {
  frenchify() {
    this.setState({ greeting: "Bonjour" });
  }
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello" };
    this.frenchify = this.frenchify.bind(this);
  }
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}
        <br />
        <h2> The time is now {new Date().toLocaleTimeString()}</h2>
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
}

export default HelloWorld;
