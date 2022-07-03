import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/font/Header/header";
import Route from "./component/font/Route/Rout";
import Form from "./component/font/Form/Form";

function App() {
  const [TilteName, setTitel] = useState("lol");
  const [show, showState] = useState(false);
  const [Filtter, setFiltter] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [addingcart, setAddingCart] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [editElement, setEditElement] = useState([]);

  useEffect(() => {
    document.title = `Hi ${TilteName}`;
  }, [TilteName]);

  // const reducer = (state, action) => {
  //   switch (action.massage) {
  //     case "👋":
  //       return { massage: "Hi Ali 👋" };
  //     case "👊":
  //       return { massage: "Good bay ali 👊" };
  //     default:
  //       return state;
  //   }
  // };

  // const [stateMassage, dispatchMassage] = useReducer(reducer, {
  //   massage: "Hello",
  // });

  const UpdateAdminState = () => {
    setAdmin(!isAdmin);
  };

  useEffect(() => {
    fetch("https://alihatem360.github.io/Database_API/NFT_API.json")
      .then((response) => response.json())
      .then(setCartItem);
  }, []);

  const handelDelete = (elementid) => {
    console.log(elementid);

    setCartItem((prevState) => {
      return prevState.filter(
        (element, stateIndex) => stateIndex !== elementid
      );
    });
  };

  const handekAddNewUser = (dataOfElemet) => {
    setCartItem((old) => [...old, dataOfElemet]);
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
          <Form
            show={show}
            handelShow={handelShow}
            handekAddNewUser={handekAddNewUser}
            cartItem={cartItem}
          />
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
            editElement ={editElement}
          />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
