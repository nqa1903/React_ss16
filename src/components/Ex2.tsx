import { Component } from 'react'

type State = {
  isLoggedIn: boolean;
};

export default class Ex2 extends Component<{} , State> {
  constructor(props: {}) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div>
        <h2>Trạng thái đăng nhập</h2>
        <p>{this.state.isLoggedIn ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}</p>
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
