import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function header({ handelShow }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <input
            className="input nav-item"
            type="text"
            placeholder="Enter Name to Filter"
          ></input>
          <button className="btn btn-primary mx-3" onClick={handelShow}>ADD new</button>

          <div className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/signup">
                SignUP
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/cart">
                <i class="fas fa-cart-plus"></i>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
