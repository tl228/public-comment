import React, { Component } from 'react';

class TestCom extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Y',
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

export default TestCom