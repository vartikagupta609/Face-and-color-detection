import React from "react";
import "./Navbar.css";
import {NavLink,Link} from 'react-router-dom';
import ffaceimg from './ffaceimg.jpg';


const Navbar = () => {
  return (
    <div className="header__nav">
      <div className="nav__content">
        <img src={ffaceimg} alt="face" height="100px" width="80px" className="ml4 pa1"/>
        <nav>
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/detectface">Detect Face</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/detectfoodname">Detect Food Name</NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/detectcolour">Detect Colour</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <Link className="btn btn-login" to="/login">
          Login
        </Link>
        <Link className="btn btn-signup" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
