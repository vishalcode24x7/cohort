import React from "react"
import { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/ProductApi";

export const ProductDataContext = createContext()

const ProductContext = (props) => {

  const [productData, setproductData] = useState([]);

  const setData = async ()=>{
    setproductData(await getAllProductData())
  }

  useEffect(function () {
    setData();
  }, []);

  return( 
  <div>
    <ProductDataContext.Provider value={productData}>
        {props.children}
    </ProductDataContext.Provider>
  </div>
  )
};

export default ProductContext;
