import React from "react";
import { RiDeleteBin6Line, RiHeart3Fill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

import "./Product.css";
function Product({
  cartItem,
  handelDelete,
  isAdmin,
  handelEdit,
  handelAddToCart,
}) {
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
                  class="btn btn-danger float-right w-100"
                  onClick={() => handelAddToCart(product)}
                >
                  Add To Favourites{" "}
                  <RiHeart3Fill style={{ fontSize: "25px" }} />
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
                    onClick={() => handelEdit(product)}
                  >
                    <Link to={`/product/${product.id}`}>
                      {" "}
                      <RiEditBoxLine style={{ fontSize: "25px" }} /> Edite{" "}
                    </Link>
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
