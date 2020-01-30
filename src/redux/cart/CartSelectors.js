// 8-21
// ovo radim da mi mapStateToProps u CartItem ne updejta svbaki put nepotrebno
// npr. ako se user state promjeni i dalje će mi opalit event u cart state i re-renderirat komponentu
// a to ne želim
// zato se postavlja "memoizacija" testiranje dali se išta u propsima promjenilo
// koristim library koji se zove RESELECT... zašto me MEMO?!!?

import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
