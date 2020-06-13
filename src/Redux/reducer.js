import { ADD_CART, REGISTER_USER } from "./action";

export const initState = {
  about: "Food factory (Inspired by Zomato)",
  contact: {
    Name: "Unknown",
    mail: "foodfactory@gmail.com",
    twitter: "FoodInc",
  },
  cart: {},
  users: { init: "Users data stored here" },
  foodData: {
    chinese: {
      Noodles: "schezwan",
      Fried_Rice: "Gobi",
      Gravy: "Mushroom",
    },
  },
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      let newcart = state.cart;
      payload.id = Object.keys(state.cart).length;
      newcart[Object.keys(state.cart).length] = payload;
      return state;

    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.data],
      };

    default:
      return state;
  }
};
