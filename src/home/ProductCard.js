import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product, counter, setCounter }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = product;

  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={thumbnail} className="card-img-top img-thumbnail" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: ${price}</li>
        <li className="list-group-item">
          Discounted Price: ${discountedPrice.toFixed(2)}
        </li>
        <a
          class="btn btn-primary mt-0.5"
          onClick={(counter) => {
            setCounter((counter) => counter + 1);
          }}
        >
          Add To Cart
        </a>
      </ul>
    </div>
  );
};

export default ProductCard;
