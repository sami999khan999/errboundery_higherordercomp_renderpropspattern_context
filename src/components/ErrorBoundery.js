import React, { Component } from "react";

export default class ErrorBoundery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error,
    };
  }

  render() {
    if (this.state.error) {
      return <h1 style={{ color: "red" }}>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}
