import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/font/Header/header";
import Route from "./component/font/Route/Rout";
import Form from "./component/font/Form/Form";
import axios from "axios";
function App() {
  const [show, showState] = useState(false);
  const [Filtter, setFiltter] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [addingcart, setAddingCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [editElement, setEditElement] = useState([]);

  const UpdateAdminState = () => {
    setAdmin(!isAdmin);
  };

  useEffect(() => {
    fetch("https://testappi.onrender.com/NFT")
      .then((response) => response.json())
      .then(setCartItem);
  }, []);

  const handelDelete = (elementid) => {
    // delete from json server by axios
    axios.delete(`https://testappi.onrender.com/NFT/${elementid}`);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handelShow = () => {
    showState(!show);
  };

  const FilterName = (name) => {
    setFiltter(name);
  };

  const handelFilterName = () => {
    if (Filtter.length !== 0) {
      return cartItem.filter((element) => element.name.includes(Filtter));
    }
    return cartItem;
  };

  ///////////// handelEdit
  const handelEdit = (element) => {
    setEditElement([element]);
    // console.log(editElement);
  };

  const handelAddToCart = (element) => {
    setAddingCart((old) => [...old, element]);
  };

  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Form show={show} handelShow={handelShow} cartItem={cartItem} />
          <Header
            handelShow={handelShow}
            FilterName={FilterName}
            UpdateAdminState={UpdateAdminState}
            isAdmin={isAdmin}
            addingcart={addingcart}
          />
          <Route
            cartItem={handelFilterName()}
            handelDelete={handelDelete}
            isAdmin={isAdmin}
            handelEdit={handelEdit}
            handelAddToCart={handelAddToCart}
            cart={addingcart}
            addingcart={addingcart}
            editElement={editElement}
          />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
