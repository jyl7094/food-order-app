import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case 'Add':
      let item = action.item;
      updatedItems = state.items;
      let updatedTotalAmount;
      let exist = -1;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === item.id) {
          exist = i;
          break;
        }
      }
      if (exist === -1) {
        updatedItems = state.items.concat(item);
      } else {
        updatedItems = [...state.items];
        const existingItem = state.items[exist];
        updatedItems[exist] = {
          ...state.items[exist],
          amount: Number(existingItem.amount) + Number(item.amount),
        };
        // existingItem.amount = Number(existingItem.amount) + Number(item.amount);
      }
      updatedTotalAmount = state.totalAmount + item.price * item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'Remove':
      let idx;
      let id = action.id;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id) {
          idx = i;
          break;
        }
      }
      // state.items[idx].amount -= 1;
      const itemToRemove = state.items[idx];
      let decreasedTotalAmount = state.totalAmount - itemToRemove.price;
      let decreasedItem;
      if (Number(itemToRemove.amount) === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        decreasedItem = { ...itemToRemove, amount: itemToRemove.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[idx] = decreasedItem;
      }
      return {
        items: updatedItems,
        totalAmount: decreasedTotalAmount,
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
