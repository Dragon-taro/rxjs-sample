import React, { Component } from "react";
import { connect } from "redux";

class App extends Component {
  render() {
    console.log(this.props);

    return <div>hello</div>;
  }
}

export default connect()(App);
