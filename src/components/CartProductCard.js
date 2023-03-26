import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, deleteProduct } from "../redux/cart/actions";
import { updateStock } from "../redux/products/actions";

const CartProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products);
   const { id, name, category, thumbnail, qty, price } = product;

   const productStock = products.find((product) => product.id === id).quantity;

   const handleIncrement = (id) => {
      if (productStock > 0) {
         dispatch(increment(id));
         dispatch(updateStock(id, 1, "remove"));
      }
   };
   const handleDecrement = (id) => {
      if (qty > 0) {
         dispatch(decrement(id));
         dispatch(updateStock(id, 1, "add"));
      }
   };

   const handleDeleteProduct = (id) => {
      dispatch(deleteProduct(id));
      dispatch(updateStock(id, qty, "add"));
   };
   return (
      <div class="cartCard">
         <div class="flex items-center col-span-6 space-x-6">
            <img class="lws-cartImage" src={thumbnail} alt="product" />
            <div class="space-y-2">
               <h4 class="lws-cartName">{name}</h4>
               <p class="lws-cartCategory">{category}</p>
               <p>
                  BDT <span class="lws-cartPrice">{price}</span>
               </p>
            </div>
         </div>
         <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
            <div class="flex items-center space-x-4">
               <button
                  class="lws-incrementQuantity"
                  onClick={() => handleIncrement(id)}
                  disabled={productStock === 0}
               >
                  <i class="text-lg fa-solid fa-plus"></i>
               </button>
               <span class="lws-cartQuantity">{qty}</span>
               <button
                  class="lws-decrementQuantity"
                  onClick={() => handleDecrement(id)}
                  disabled={qty === 0}
               >
                  <i class="text-lg fa-minus fa-solid "></i>
               </button>
            </div>
            <p class="text-lg font-bold">
               BDT <span class="lws-calculatedPrice">{qty * price}</span>
            </p>
         </div>
         <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
            <button
               class="lws-removeFromCart"
               onClick={() => handleDeleteProduct(id)}
            >
               <i class="text-lg text-red-400 fa-solid fa-trash"></i>
            </button>
         </div>
      </div>
   );
};

export default CartProductCard;
