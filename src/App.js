import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/font/Header/header";
import Route from "./component/font/Route/Rout";
import Form from "./component/font/Form/Form";

function App() {
  const [TilteName, setTitel] = useState("lol");

  useEffect(() => {
    document.title = `Hi ${TilteName}`;
  }, [TilteName]);

  const reducer = (state, action) => {
    switch (action.massage) {
      case "👋":
        return { massage: state.massage + "Hi Ali 👋" };
      case "👊":
        return { massage: state.massage + "Good bay ali 👊" };
      default:
        return state;
    }
  };
  const [stateMassage, dispatchMassage] = useReducer(reducer, {
    massage: "Hello",
  });

  const [show, showState] = useState(false);
  const [Filtter, setFiltter] = useState("");

  const [cartItem, setCartItem] = useState([
    // {
    //   id: 1,
    //   name: "Les Immort",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/95/eb/12/95eb12b6aff17089523caed5f1a9c1a8.jpg",
    // },
    // {
    //   id: 2,
    //   name: "Les Immort",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/fa/ec/8f/faec8f78a0cdf4360a03fd4284b0d712.jpg",
    // },
    // {
    //   id: 3,
    //   name: "Les Immort",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/44/25/47/44254767baf386eb280ea283bfb6c04f.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Les Immort",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    // },
    // {
    //   id: 5,
    //   name: "sdfsdf",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    // },
    // {
    //   id: 6,
    //   name: "sdfsdf",
    //   price: 123,
    //   image:
    //     "https://i.pinimg.com/750x/62/32/66/62326694ce4a7b0a59bb5601b9bdb79a.jpg",
    // },
  ]);

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
    console.log(name);
  };

  const handelFilterName = () => {
    if (Filtter.length !== 0) {
      return cartItem.filter((element) => element.name.includes(Filtter));
    }
    return cartItem;
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

          <Header handelShow={handelShow} FilterName={FilterName} />

          <button onClick={() => dispatchMassage({ massage: "👋" })}>
            {" "}
            say Hi
          </button>
          <button onClick={() => dispatchMassage({ massage: "👊" })}>
            {" "}
            ya Enta
          </button>
          <p style={{ color: "white" }}>{stateMassage.massage}</p>
          <Route cartItem={handelFilterName()} handelDelete={handelDelete} />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
