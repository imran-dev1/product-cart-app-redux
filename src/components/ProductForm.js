import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/products/actions";

const ProductForm = () => {
   const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [category, setCategory] = useState("");
   const [thumbnail, setThumbnail] = useState("");
   const [price, setPrice] = useState("");
   const [qty, setQty] = useState("");

   const handleAddNewProduct = (e) => {
      e.preventDefault();

      dispatch(
         addNewProduct({
            name,
            category,
            thumbnail,
            price: Number(price),
            quantity: Number(qty),
         })
      );
   };

   return (
      <div>
         <div class="formContainer">
            <h4 class="formTitle">Add New Product</h4>
            <form
               class="space-y-4 text-[#534F4F]"
               id="lws-addProductForm"
               onSubmit={handleAddNewProduct}
            >
               <div class="space-y-2">
                  <label for="lws-inputName">Product Name</label>
                  <input
                     class="addProductInput"
                     id="lws-inputName"
                     type="text"
                     required
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div class="space-y-2">
                  <label for="lws-inputCategory">Category</label>
                  <input
                     class="addProductInput"
                     id="lws-inputCategory"
                     type="text"
                     required
                     value={category}
                     onChange={(e) => setCategory(e.target.value)}
                  />
               </div>
               <div class="space-y-2">
                  <label for="lws-inputImage">Image Url</label>
                  <input
                     class="addProductInput"
                     id="lws-inputImage"
                     type="text"
                     required
                     value={thumbnail}
                     onChange={(e) => setThumbnail(e.target.value)}
                  />
               </div>
               <div class="grid grid-cols-2 gap-8 pb-4">
                  <div class="space-y-2">
                     <label for="ws-inputPrice">Price</label>
                     <input
                        class="addProductInput"
                        type="number"
                        id="lws-inputPrice"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                     />
                  </div>
                  <div class="space-y-2">
                     <label for="lws-inputQuantity">Quantity</label>
                     <input
                        class="addProductInput"
                        type="number"
                        id="lws-inputQuantity"
                        required
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                     />
                  </div>
               </div>
               <button type="submit" id="lws-inputSubmit" class="submit">
                  Add Product
               </button>
            </form>
         </div>
      </div>
   );
};

export default ProductForm;
