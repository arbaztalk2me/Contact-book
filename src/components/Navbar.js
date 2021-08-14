import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          ContactBook
        </Link>
        <div>
          <Link to="addcontact" className="btn btn-outline-light mx-auto">
            Add contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
