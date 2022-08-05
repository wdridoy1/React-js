import React from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./product";
import style from "./products.css";

const products = (props) => {
  const { products } = props;
  return (
    <section className="products">
      {products.map((product) => {
        const newProduct = { product, id: uuidv4() };
        return <Product {...newProduct} key={newProduct.id} />;
      })}
    </section>
  );
};

export default products;
