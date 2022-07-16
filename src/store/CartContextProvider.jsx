import React from 'react';
import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  cartAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updateCartAmount;
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateCartAmount = state.cartAmount;
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updateCartAmount = state.cartAmount + 1;
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      cartAmount: updateCartAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    let updateCartAmount = state.cartAmount;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      updateCartAmount -= 1;
    } else {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      cartAmount: updateCartAmount,
    };
  }
  return defaultCartState;
};

export default function CartContextProvider(props) {
  const [cartSate, setCartState] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    setCartState({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    setCartState({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  const cartContext = {
    items: cartSate.items,
    totalAmount: cartSate.totalAmount,
    totalCart: cartSate.cartAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}
