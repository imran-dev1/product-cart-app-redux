import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

const Navbar = ({ setIsHome }) => {
   const cart = useSelector((state) => state.cart);
   const cartQuantity = cart.reduce(
      (totalQuantity, product) => totalQuantity + product.qty,
      0
   );
   return (
      <nav class="bg-[#171C2A] py-4">
         <div class="navBar">
            <a href="#" onClick={() => setIsHome(true)}>
               <img src={logo} alt="LWS" class="max-w-[140px]" />
            </a>

            <div class="flex gap-4">
               <a
                  href="#"
                  class="navHome"
                  id="lws-home"
                  onClick={() => setIsHome(true)}
               >
                  Home
               </a>
               <a
                  href="#"
                  class="navCart"
                  id="lws-cart"
                  onClick={() => setIsHome(false)}
               >
                  <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                  <span id="lws-totalCart">{cartQuantity}</span>
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
