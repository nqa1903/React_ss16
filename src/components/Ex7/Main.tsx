import { Component } from 'react'
import Header from './Header'
import Product from './Product'
import Cart from './Cart'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Product></Product>
        <Cart></Cart>
      </div>
    )
  }
}
