import ordersApi from '../../api/ordersApi';

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

export const handleAddCartItem = async (idUser, product) => {
  const orderUser = await ordersApi.getOrderById(idUser);
  console.log(orderUser);
  const cartItemUser = await orderUser.cartItems;
  const newCartItemUser = await addCartItem(cartItemUser, product);
  await ordersApi.update({ id: idUser, cartItems: newCartItemUser });
};

export const handleRemoveCartItem = async (idUser, product) => {
  const orderUser = await ordersApi.getOrderById(idUser);
  console.log(orderUser);
  const cartItemUser = await orderUser.cartItems;
  const newCartItemUser = await removeCartItem(cartItemUser, product);
  await ordersApi.update({ id: idUser, cartItems: newCartItemUser });
};

export const handleClearCartItem = async (idUser, product) => {
  const orderUser = await ordersApi.getOrderById(idUser);
  console.log(orderUser);
  const cartItemUser = await orderUser.cartItems;
  const newCartItemUser = await clearCartItem(cartItemUser, product);
  await ordersApi.update({ id: idUser, cartItems: newCartItemUser });
};
