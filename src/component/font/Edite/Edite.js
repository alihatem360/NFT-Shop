import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Edite.css";
export default function Edite({ editElement }) {
  const [inputeEle, setInputValue] = useState({
    id: editElement[0].id,
    name: editElement[0].name,
    price: editElement[0].price,
    image: editElement[0].image,
  });

  const handleChange = (inputeEle) => {
    const Key = inputeEle.target.id;
    const value = inputeEle.target.value;

    setInputValue((prevState) => {
      return { ...prevState, [Key]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      "https://testappi.onrender.com/NFT/" + editElement[0].id,
      inputeEle
    );
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  console.log(inputeEle);
  return (
    <>
      <div>
        <div className="" key={inputeEle.id}>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={inputeEle.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Enter price"
                value={inputeEle.price}
                onChange={handleChange}
              />
            </div>

            <div className="my-4">
              <input
                type="text"
                className="form-control"
                id="image"
                placeholder="Enter image"
                value={inputeEle.image}
                onChange={handleChange}
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
        </div>
      </div>
    </>
  );
}
