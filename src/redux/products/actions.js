import { NEWPRODUCT, UPDATESTOCK } from "./actionTypes";

export const addNewProduct = (productData) => {
   return {
      type: NEWPRODUCT,
      payload: productData,
   };
};

export const updateStock = (id, qty, updateType) => {
   return {
      type: UPDATESTOCK,
      payload: {
         id,
         qty,
         updateType,
      },
   };
};
