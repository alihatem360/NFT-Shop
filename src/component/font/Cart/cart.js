import React from "react";
import "./cart.css";
// https://alihatem360.github.io/Database_API/NFT_API.json

const Cart = ({ addingcart }) => {
  return (
    <React.Fragment>

      <table className="table">
        <thead>
          {addingcart.map((element) => (
            <tr key={element.id}>
              <th scope="col"></th>
              <th scope="col">{element.name}</th>
              <th scope="col">{element.price} $</th>
              <th scope="col"></th>
            </tr>
          ))}
        </thead>
      </table>
    </React.Fragment>
  );
};

export default Cart;
