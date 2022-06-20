import React from "react";
import "./header.css"
import {Link} from"react-router-dom";
function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand mr-auto" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span claclassNamess="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">
                SignUP
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/cart">
              <i class="fas fa-cart-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default header;
