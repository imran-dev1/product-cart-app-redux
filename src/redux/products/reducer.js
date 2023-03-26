import { NEWPRODUCT, UPDATESTOCK } from "./actionTypes";
import { initialState } from "./initialState";

const getNewId = (state) => {
   const maxId = state.reduce(
      (maxId, product) => Math.max(maxId, product.id),
      1
   );
   return maxId + 1;
};
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case NEWPRODUCT:
         const { name, category, thumbnail, price, quantity } = action.payload;
         return [
            ...state,
            {
               id: getNewId(state),
               name,
               category,
               thumbnail,
               price,
               quantity,
            },
         ];
      case UPDATESTOCK:
         const { id, qty, updateType } = action.payload;
         if (updateType === "add") {
            return state.map((product) => {
               if (product.id === id) {
                  return {
                     ...product,
                     quantity: product.quantity + qty,
                  };
               }
               return product;
            });
         }
         if (updateType === "remove") {
            return state.map((product) => {
               if (product.id === id) {
                  return {
                     ...product,
                     quantity: product.quantity - qty,
                  };
               }
               return product;
            });
         }
         return state;

      default:
         return state;
   }
};

export default reducer;
