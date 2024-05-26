import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">DZign</span>
        </a>

        <ul className="nav-item">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Course Details</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
