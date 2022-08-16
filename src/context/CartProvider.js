import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      let item = action.item;
      let updatedAmount;
      let updatedItems;
      let exist = -1;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items.id === item.id) {
          exist = i;
          break;
        }
      }
      if (exist === -1) {
        updatedItems = state.items.concat(item);
      } else {
        const existingItem = state.items[exist];
        existingItem.amount += item.amount;
      }
      updatedAmount = state.totalAmount + item.price * item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case 'Remove':
      return {
        items: state.items,
        totalAmount: 0,
      };
    default:
      return defaultState;
  }
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleAdd = (item) => {
    dispatch({ type: 'Add', item: item });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'Remove', id: id });
  };

  const cartContext = {
    // items: [{amount:5}, {amount:7}],
    // totalAmount: 5 *0,
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: handleAdd,
    removeItem: handleRemove,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
