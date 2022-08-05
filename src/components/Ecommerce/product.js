import React from "react";
import style from "./product.css";
const product = (props) => {
  const { product } = props;
  const { title, price, description, category, image, rating } = product;
  return (
    <article className="product">
      <div>
        <div className="product-images">
          <img className="product-image" src={image} alt="" />
        </div>
        <div className="product-content">
          <div className="inner-product-content">
            <h3>{title}</h3>
            <h4>Price : {price}</h4>
            {/* <h5>Category : {category}</h5> */}
            <p>{description}</p>
            <button className="btn">Add to Card</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default product;
