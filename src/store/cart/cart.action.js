import { CART_ACTION_TYPES } from './cart.types';
import ordersApi from '../../api/ordersApi';

const createAction = (type, payload) => ({ type, payload });

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const addCartItemMultiple = (cartItems, productToAdd, number) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + number }
        : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: number }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setCartItemStart = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS_START, cartItems);
};

export const addItemToCart = (idUser, cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  ordersApi.update({ id: idUser, cartItems: newCartItems });

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const addMultipleItemToCart = (
  idUser,
  cartItems,
  productToAdd,
  number,
) => {
  const newCartItems = addCartItemMultiple(cartItems, productToAdd, number);
  ordersApi.update({ id: idUser, cartItems: newCartItems });

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (idUser, cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  ordersApi.update({ id: idUser, cartItems: newCartItems });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (idUser, cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  ordersApi.update({ id: idUser, cartItems: newCartItems });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
