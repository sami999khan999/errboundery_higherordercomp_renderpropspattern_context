import React, { Component } from "react";
import higherOrderComp from "../utls/higherOrderComp";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.increaseCount}>Increment</button>
      </div>
    );
  }
}

export default higherOrderComp(ClickCounter);
