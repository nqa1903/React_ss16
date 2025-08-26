import { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '15px',
          width: '350px',
          height: 'auto',
          background: 'black',
          color: 'white',
          padding: '15px'
        }}
      >
        <h3>Cart</h3>
        <hr />
        <div>
          <p>Điện thoại Samsung Galaxy | 1 | 20.000.000 đ</p>
          <p>Điện thoại iPhone14 Promax | 1 | 20.500.000 đ</p>
          <p>Điện thoại Samsung Galaxy | 1 | 21.000.000 đ</p>
        </div>
        <hr />
        <p>Tổng tiền: 61.500.000 đ</p>
      </div>
    );
  }
}