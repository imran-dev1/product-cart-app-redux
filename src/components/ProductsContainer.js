import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
   const products = useSelector((state) => state.products);
   if (products.length === 0) {
      return (
         <div class="productContainer" id="lws-productContainer">
            <p>No products Found</p>
         </div>
      );
   }

   return (
      <div class="productContainer" id="lws-productContainer">
         {products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
         ))}
      </div>
   );
};

export default ProductsContainer;
