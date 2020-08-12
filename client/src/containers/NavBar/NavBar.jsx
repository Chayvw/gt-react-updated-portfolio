import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {


    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
        </Link>
            </li>
            {/* <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link> */}
            {/* </li> */}
            <li className="nav-item">
                <Link
                    to="/projects"
                    className="nav-link"
                >
                    Projects
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contacts"
                    className="nav-link"
                >
                    Contact
        </Link>
            </li>
            {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
        </ul>
    );
}

export default NavTabs;
