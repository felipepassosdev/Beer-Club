import React from 'react';
import { Link  } from 'react-router-dom'
import { connect } from 'react-redux'

import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png'

function Header({ cartSize, cart }) {
  console.log(cart)
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{ cartSize } itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
  cart: state.cart,
}))(Header)