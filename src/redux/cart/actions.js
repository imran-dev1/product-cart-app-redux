import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionTypes";

export const addToCart = (cartProduct) => {
   return {
      type: ADDTOCART,
      payload: cartProduct,
   };
};

export const increment = (id) => {
   return {
      type: INCREMENT,
      payload: id,
   };
};

export const decrement = (id) => {
   return {
      type: DECREMENT,
      payload: id,
   };
};

export const deleteProduct = (id) => {
   return {
      type: DELETE,
      payload: id,
   };
};
