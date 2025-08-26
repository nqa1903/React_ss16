import { Component } from "react";

type State = {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
};

export default class Ex5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<
      State,
      keyof State
    >);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }

    if (Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nhập tên"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Nhập email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="Nhập tuổi"
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submitted && !error && (
          <div>
            <h3>Thông tin người dùng</h3>
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    );
  }
}
