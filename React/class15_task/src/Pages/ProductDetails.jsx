import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  // console.log(productData);

  const { id } = useParams();

  let selectedProduct = '';
  if(productData.length > 0){
  selectedProduct = productData.find((elem) => id == elem.id);
  }

  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <h5>${selectedProduct.price}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
