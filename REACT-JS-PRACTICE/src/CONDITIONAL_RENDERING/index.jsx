import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>;
  }
}
export default CONDITIONAL_RENDERING;
/*
class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    let element;
    if (isLoggedIn) {
      element = <HomePage />;
    } else {
      element = <LoginPage />;
    }

    return <div>{element}</div>;
  }
}
export default CONDITIONAL_RENDERING;


import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class CONDITIONAL_RENDERING extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false,
    }
  }

  render() {
    const{isLoggedIn} = this.state;
    if (this.state.isLoggedIn) {
      return <HomePage />;
    } else {
      return <LoginPage />;
    }
  }
}
*/
