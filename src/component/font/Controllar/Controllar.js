import React, { Fragment } from "react";
import { useState } from "react";

const Controllar = ({ handekAddNewUser , itemData , cartItem }) => {
  const [inputeEle, setInputValue] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    handekAddNewUser({
      id: Math.round(Math.random() * 100),
      name: inputeEle.name,
      price: inputeEle.price,
      image: inputeEle.image,
    });

    setInputValue({
      id: "",
      name: "",
      price: "",
      image: "",
    });
  };


  const handelInputForm = (inputeEle) => {
    const Key = inputeEle.target.id;
    const value = inputeEle.target.value;

    setInputValue((prevState) => {
      return { ...prevState, [Key]: value };
    });
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            onChange={handelInputForm}
            value={inputeEle.name}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            onChange={handelInputForm}
            value={inputeEle.price}
          />
        </div>

        <div className="my-4">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Enter image"
            onChange={handelInputForm}
            value={inputeEle.image}
          />
        </div>

        <button type="submit" className="btn btn-primary mx-3">
          Submit
        </button>

        <button
          type="reset"
          className="btn btn-warning"
          onClick={() =>
            setInputValue(() => {
              return { id: "", name: "", price: "", image: "" };
            })
          }
        >
          reset
        </button>
      </form>
    </Fragment>
  );
};

export default Controllar;
