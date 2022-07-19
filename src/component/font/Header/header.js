import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RiAddFill, RiAdminLine, RiUserLine , RiHeartsFill} from "react-icons/ri";

import Filter from "../Filter/Filter";
function header({
  handelShow,
  FilterName,
  UpdateAdminState,
  isAdmin,
  addingcart,
}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="#">
          NFT
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <button
            className={
              isAdmin
                ? "btn btn-danger mx-3  text-light"
                : "btn btn-primary mx-3"
            }
            onClick={UpdateAdminState}
          >
            {isAdmin ? `Admin ` : "User "}
            {isAdmin ? <RiAdminLine /> : <RiUserLine />}
          </button>

          {isAdmin && (
            <button className="btn btn-primary mx-3" onClick={handelShow}>
              <RiAddFill /> Add new
            </button>
          )}

          <div className="navbar-nav">
            <Filter FilterName={FilterName} />

            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>

         {
             // <li className="nav-item ">
            //   <Link className="nav-link" to="/signup">
            //     SignUP
            //   </Link>
            // </li>

         }
            <li className="nav-item ">
              <Link className="nav-link" to="/cart">
                <RiHeartsFill />
                <span className="btn btn-warning ">{addingcart.length}</span>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
