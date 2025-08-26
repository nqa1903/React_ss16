import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: 'orange',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <a
            href="/"
            style={{
              marginRight: '20px',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Trang chủ
          </a>
          <a
            href="/"
            style={{
              marginRight: '20px',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Danh sách sản phẩm
          </a>
        </div>
        <div>
          <a href="/" style={{ color: 'black', textDecoration: 'none' }}>
            Giỏ hàng
          </a>
        </div>
      </div>
    );
  }
}