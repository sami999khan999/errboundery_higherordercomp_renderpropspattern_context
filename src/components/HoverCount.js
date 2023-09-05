import React, { Component } from "react";
import higherOrderComp from "../utls/higherOrderComp";

class HoverCount extends Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onMouseOver={this.props.increaseCount}>Increment</button>
      </div>
    );
  }
}

export default higherOrderComp(HoverCount, 10);
