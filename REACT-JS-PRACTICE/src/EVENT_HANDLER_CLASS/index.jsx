import React, { Component } from "react";

class EVENT_HANDLER_CLASS extends Component {
  /*  
  handleOnChange = (e) => {
    console.log(e.target.value);
  };
  */

  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      changedValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}
export default EVENT_HANDLER_CLASS;
