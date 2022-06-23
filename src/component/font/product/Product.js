import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";

import "./Product.css";
function Product({ cartItem, handelDelete }) {
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
            <p>{product.price}$</p>

              <button
                type="button"
                class="btn btn-danger float-right w-100"
                onClick={(e) => handelDelete(index)}
              >
              <RiDeleteBin6Line />
     
              </button>
              <button
                type="button"
                class="btn btn-warning float-right w-100"
                onClick={(e) => handelDelete(index)}
              >
              <RiEditBoxLine />
     
              </button>

             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
