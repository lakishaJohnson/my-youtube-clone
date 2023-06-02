// import React from "react"

import { Link } from "react-router-dom";

function NavBar() {
  // const handleHomeClick = () => {
  //   if (window.location.pathname !== "/") {
  //     window.location.href = "/";
  //   } else {
  //     window.location.reload();
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: "white", fontWeight: "bold" }}
        >
          YouTube
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              // onClick={handleHomeClick}
              style={{ color: "white" }}
            >
              Home
            </Link>
            <Link className="nav-link" to="/about" style={{ color: "white" }}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
