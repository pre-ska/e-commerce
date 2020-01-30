import React from "react";

import Button from "../button/Button.jsx";
import CartItem from "../cart-item/CartItem";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/CartSelectors";

import "./CartDropdown.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";

import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
      }}>
      GO TO CHECKOUT
    </Button>
  </div>
);

//dispatch je auto injektiran kao prop ako ga ne stavimm u connect 8-27
// to se zove dispatch short hand
// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// prvo memoizacija preko reselect librarija... 8-22
// zatim korištenje napredne metode iz RESELECTA... createStructuredSelector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
