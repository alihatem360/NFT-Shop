import React, { Fragment } from "react";
import "./Form.css";
import Controllar from "../Controllar/Controllar";
export default function Form({ show, handelShow, cartItem }) {
  return (
    show && (
      <Fragment>
        <div className="Layout_of_Form">
          <Controllar cartItem={cartItem} />
        </div>
        <div className="cancelbtn">
          <button className="btn btn-danger" onClick={handelShow}>
            {" "}
            X{" "}
          </button>
        </div>{" "}
      </Fragment>
    )
  );
}
