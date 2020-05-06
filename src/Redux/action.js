export const ADD_CART = "ADD_CART";

export const addToCart = (payload) => {
  return {
    type: ADD_CART,
    payload: payload,
  };
};
