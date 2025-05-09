import React, { Component, createRef } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();

    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameRef.current.value);
  };

  render() {
    return (
      <form>
        <div className="form-field" onSubmit={this.handleSubmit}>
          <label htmlFor="userName">UserName : </label>
          <input type="text" id="userName" ref={this.userNameRef} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" />
        </div>
        <button type="submit">register</button>
      </form>
    );
  }
}
