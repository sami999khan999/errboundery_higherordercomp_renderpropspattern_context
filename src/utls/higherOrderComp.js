import React from "react";

const higherOrderComp = (OldComp, iteration = 1) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState({
        count: this.state.count + iteration,
      });
    };

    render() {
      return (
        <OldComp count={this.state.count} increaseCount={this.increaseCount} />
      );
    }
  }

  return NewComp;
};

export default higherOrderComp;
