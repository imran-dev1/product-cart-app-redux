import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

const CartPage = () => {
   const cart = useSelector((state) => state.cart);

   const subTotal = cart.reduce(
      (total, product) => total + product.qty * product.price,
      0
   );

   const renderCartProducts = () => {
      switch (cart.length) {
         case 0:
            return (
               <div>
                  <p className="text-center">
                     {cart.length < 1 && "Your cart is empty!"}
                  </p>
               </div>
            );

         default:
            return (
               <div class="space-y-6 ">
                  {cart.map((product) => (
                     <CartProductCard
                        product={product}
                        key={product.id}
                     ></CartProductCard>
                  ))}
               </div>
            );
      }
   };
   return (
      <main class="py-16">
         <div class="container 2xl:px-8 px-2 mx-auto">
            <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div class="cartListContainer">
               {renderCartProducts()}
               <div>
                  <div class="billDetailsCard">
                     <h4 class="mt-2 mb-8 text-xl font-bold text-center">
                        Bill Details
                     </h4>
                     <div class="space-y-4">
                        <div class="flex items-center justify-between">
                           <p>Sub Total</p>
                           <p>
                              BDT <span class="lws-subtotal">{subTotal}</span>
                           </p>
                        </div>
                        <div class="flex items-center justify-between">
                           <p>Discount</p>
                           <p>
                              BDT <span class="lws-discount">0</span>
                           </p>
                        </div>
                        <div class="flex items-center justify-between">
                           <p>VAT</p>
                           <p>
                              BDT <span class="vat">0</span>
                           </p>
                        </div>
                        <div class="flex items-center justify-between pb-4">
                           <p class="font-bold">TOTAL</p>
                           <p class="font-bold">
                              BDT <span class="lws-total">{subTotal}</span>
                           </p>
                        </div>
                        <button class="placeOrderbtn">place order</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default CartPage;
