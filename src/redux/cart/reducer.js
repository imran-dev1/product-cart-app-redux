import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADDTOCART:
         const { id, name, category, thumbnail, price } = action.payload;
         const alreadyExistInTheCart = state.find(
            (product) => product.id === id
         );

         if (alreadyExistInTheCart) {
            return state.map((item) => {
               if (item.id === id) {
                  return {
                     ...item,
                     qty: item.qty + 1,
                  };
               }
               return item;
            });
         } else {
            return [
               ...state,
               {
                  id,
                  name,
                  category,
                  thumbnail,
                  price,
                  qty: 1,
               },
            ];
         }
      case INCREMENT:
         return state.map((product) => {
            if (product.id === action.payload) {
               return {
                  ...product,
                  qty: product.qty + 1,
               };
            }
            return product;
         });

      case DECREMENT:
         return state.map((product) => {
            if (product.id === action.payload) {
               return {
                  ...product,
                  qty: product.qty - 1,
               };
            }
            return product;
         });

      case DELETE:
         return state.filter((product) => product.id !== action.payload);

      default:
         return state;
   }
};

export default reducer;
