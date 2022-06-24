import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";

import "./Product.css";
function Product({ cartItem, handelDelete, isAdmin, handelEdit , handelAddToCart }) {
  return (
    <div className="row">
      {cartItem.map((product, index) => (
        <div key={index} className="col-lg-3 my-3">
          <div className="card">
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
            />
            <div className="card-body">
              <span className="card-title">{product.name}</span>
              <p>{product.price}$</p>
              {isAdmin ? (
                ""
              ) : (
                <button
                  type="button"
                  class="btn btn-primary float-right w-100"
                  onClick={(e) => handelAddToCart(index)}
                >
                  <RiEditBoxLine style={{ fontSize: "25px" }} /> Add to cart
                </button>
              )}

              {isAdmin && (
                <>
                  <button
                    type="button"
                    class="btn btn-danger float-right w-100"
                    onClick={(e) => handelDelete(index)}
                  >
                    <RiDeleteBin6Line style={{ fontSize: "25px" }} /> Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning float-right w-100"
                    onClick={(e) => handelEdit(index)}
                  >
                    <RiEditBoxLine style={{ fontSize: "25px" }} /> Edite
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
