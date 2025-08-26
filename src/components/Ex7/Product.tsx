import { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại Samsung Galaxy</p>
          <p>20.000.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại iPhone14 Promax</p>
          <p>20.500.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại Samsung Galaxy</p>
          <p>21.000.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại iPhone11 Promax</p>
          <p>21.500.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại Samsung Galaxy</p>
          <p>22.500.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width:"22.5%"
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại Oppo A9</p>
          <p>23.000.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            textAlign: "center",
            width: "22.5%",
          }}
        >
          <img
            src="https://www.apple.com/vn/iphone/home/images/overview/welcome/switch/welcome__n6xy87ib1gyu_xlarge.jpg"
            alt=""
            style={{ width: "250px", height: "150px", objectFit: "cover" }}
          />
          <p>Điện thoại Oppo V5</p>
          <p>23.500.000 đ</p>
          <button>Thêm vào giỏ hàng</button>
        </div>
      </div>
    );
  }
}