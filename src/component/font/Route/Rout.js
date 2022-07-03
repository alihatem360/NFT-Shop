import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "../product/Product";
import Cart from "../Cart/cart";
import SignUp from "../SignUp/SignUp";
import Edite from "../Edite/Edite";
function Rout({
  cartItem,
  handelDelete,
  isAdmin,
  handelEdit,
  handelAddToCart,
  cart,
  addingcart,
  editElement,
}) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Product
            cartItem={cartItem}
            handelDelete={handelDelete}
            isAdmin={isAdmin}
            handelEdit={handelEdit}
            handelAddToCart={handelAddToCart}
          />
        </Route>

        <Route path="/cart" exact>
          <Cart
            productsItems={cartItem}
            handelDelete={handelDelete}
            addingcart={addingcart}
          />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route exact path="/product/:id">
          <Edite editElement ={editElement} />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Rout;
