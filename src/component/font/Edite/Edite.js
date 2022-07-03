import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import "./Edite.css";
export default function Edite({ editElement }) {
  const { id } = useParams();
  console.log(editElement);

  const [inputeEle, setInputValue] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });




const handleChange = (inputeEle) => {
    const Key = inputeEle.target.id;
    const value = inputeEle.target.value;

    setInputValue((prevState) => {
      return { ...prevState, [Key]: value };
    });
  };


  console.log(inputeEle);
  return (
    <>
      <div>
        {editElement.map((element) => (
          <div className="" key={inputeEle.id}>
            <form>
              <div className="my-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={element.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                  value={element.price}
                  onChange={handleChange}
                />
              </div>

              <div className="my-4">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Enter image"
                  value={element.image}
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
        ))}
      </div>
    </>
  );
}
