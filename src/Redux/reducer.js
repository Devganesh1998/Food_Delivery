import { ADD_CART } from "./action";

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
      console.log(payload);
      let newcart = state.cart;
      newcart[payload.id] = payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
