import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
function Product({ cartItem, handelDelete }) {
  console.log("productsItems", cartItem);

  return (
    <div className="row">
      {cartItem.map((product, index) => (
        <div key={index} className="col-lg-2 my-3">
          <div className="card">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
            />
            <div className="card-body">
              <span className="card-title">{product.name}</span>

              <button
                type="button"
                class="btn btn-danger float-right"
                onClick={(e) => handelDelete(index)}
              >
                <i class="fas fa-trash-alt"></i>
              </button>

              <p>{product.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
