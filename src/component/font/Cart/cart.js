import React from "react";
import { useParams } from "react-router-dom";
import "./cart.css";

const Cart = ({ cart }) => {

  console.log({cart});

  // let { id } = useParams();
  return (
    <React.Fragment>
      Hello Cart
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">
              <i class="fas fa-plus-square"></i>
            </th>
          </tr>
        </thead>
        <tbody>

       
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Cart;
