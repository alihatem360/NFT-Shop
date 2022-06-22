import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import Data from "./component/back/data/Data";
import Header from "./component/font/Header/header";
import Route from "./component/font/Route/Rout";
import Form from "./component/font/Form/Form";
function App() {
  // const dataItems = Data.products;
  // handleAdd =(item )=> {

  // }

  const [show, showState] = useState(false);

  const [cartItem, setCartItem] = useState([
    {
      id: 1,
      name: "Les Immort",
      price: 123,
      image:
        "https://i.pinimg.com/750x/95/eb/12/95eb12b6aff17089523caed5f1a9c1a8.jpg",
    },
    {
      id: 2,
      name: "Les Immort",
      price: 123,
      image:
        "https://i.pinimg.com/750x/fa/ec/8f/faec8f78a0cdf4360a03fd4284b0d712.jpg",
    },
    {
      id: 3,
      name: "Les Immort",
      price: 123,
      image:
        "https://i.pinimg.com/750x/44/25/47/44254767baf386eb280ea283bfb6c04f.jpg",
    },
    {
      id: 4,
      name: "Les Immort",
      price: 123,
      image:
        "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    },

    {
      id: 5,
      name: "sdfsdf",
      price: 123,
      image:
        "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    },

    {
      id: 6,
      name: "sdfsdf",
      price: 123,
      image:
        "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    },
  ]);

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

  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Form
            show={show}
            handelShow={handelShow}
            handekAddNewUser={handekAddNewUser}
          />

          <Header handelShow={handelShow} />
          <Route cartItem={cartItem} handelDelete={handelDelete} />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
