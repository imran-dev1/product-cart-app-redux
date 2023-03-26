import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import { updateStock } from "../redux/products/actions";

const ProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const { id, name, category, thumbnail, price, quantity } = product;

   const handleAddToCart = () => {
      if (quantity > 0) {
         dispatch(addToCart(product));
         dispatch(updateStock(id, 1, "remove"));
      }
   };

   return (
      <div class="lws-productCard">
         <img class="lws-productImage" src={thumbnail} alt="product" />
         <div class="p-4 space-y-2">
            <h4 class="lws-productName">{name}</h4>
            <p class="lws-productCategory">{category}</p>
            <div class="flex items-center justify-between pb-2">
               <p class="productPrice">
                  BDT <span class="lws-price">{price}</span>
               </p>
               <p class="productQuantity">
                  QTY <span class="lws-quantity">{quantity}</span>
               </p>
            </div>
            <button
               class="lws-btnAddToCart"
               onClick={handleAddToCart}
               disabled={quantity === 0}
            >
               Add To Cart
            </button>
         </div>
      </div>
   );
};

export default ProductCard;
