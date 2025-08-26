import { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class Ex6 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    return (
      <div
        style={{
          backgroundColor: isDarkMode ? "#222" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          minHeight: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{isDarkMode ? "Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}</h2>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </div>
    );
  }
}
