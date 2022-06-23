import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "../product/Product";
import Cart from "../Cart/cart";
import SignUp from "../SignUp/SignUp";
function Rout({ cartItem , handelDelete}) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Product cartItem={cartItem}  handelDelete={handelDelete}/>
        </Route>

        <Route exact  path="/cart">
          <Cart productsItems={cartItem}  handelDelete={handelDelete} />
        </Route>

        <Route exact  path="/signup">
          <SignUp productsItems={cartItem} />
        </Route>

        <Route exact path="/cart/:id">
          <Cart productsItems={cartItem} />
        </Route>
        
      </Switch>
    </React.Fragment>
  );
}

export default Rout;
