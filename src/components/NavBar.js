import { Link } from "react-router-dom";

function NavBar({ resetVideos }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          onClick={resetVideos}
          to="/"
          style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          YouTube
        </Link>
        <div
          className="collapse navbar-collapse"
          onClick={resetVideos}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              // onClick={handleHomeClick}
              style={{ color: "white", fontSize: "1.2rem", paddingTop: "10px" }}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to="/about"
              style={{ color: "white", fontSize: "1.2rem", paddingTop: "10px" }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
