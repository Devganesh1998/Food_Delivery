export const ADD_CART = "ADD_CART";
export const REGISTER_USER = "REGISTER_USER";

export const addToCart = (payload) => {
  return {
    type: ADD_CART,
    payload: payload,
  };
};

export const register_user = (data) => {
  return {
    type: REGISTER_USER,
    data,
  };
};
