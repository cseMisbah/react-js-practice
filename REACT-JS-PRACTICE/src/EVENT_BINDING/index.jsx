import React, { Component } from "react";

class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}
export default EVENT_BINDING;
