import { Component } from 'react'

type State = {
  count: number;
};

export default class Ex3 extends Component<{} , State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
