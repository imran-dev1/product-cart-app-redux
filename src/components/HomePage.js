import React from "react";
import ProductForm from "./ProductForm";
import ProductsContainer from "./ProductsContainer";

const HomePage = () => {
   return (
      <main class="py-16">
         <div class="productWrapper">
            <ProductsContainer></ProductsContainer>
            <ProductForm></ProductForm>
         </div>
      </main>
   );
};

export default HomePage;
