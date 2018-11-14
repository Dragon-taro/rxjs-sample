import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../modules/User";
import { increment, incrementIfOdd } from "../modules/Counter";

class App extends Component {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleSearch() {
    const { value } = this.state;
    this.props.dispatch(fetchUser(value));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.handleSearch()}>検索</button>
        <div>
          <p>{this.props.counter}</p>
          <button onClick={() => this.props.dispatch(increment())}>+</button>
          <button onClick={() => this.props.dispatch(incrementIfOdd())}>
            odd+
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
