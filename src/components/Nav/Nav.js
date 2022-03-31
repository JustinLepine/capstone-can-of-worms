import React, { useState } from "react";
import Logo from "../../assets/icons/can_of_worms.svg";
import Drop from "../../assets/icons/drop_down.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setTimeout(function () {
      setDropdown(false);
    }, 2300);
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__logo" src={Logo} alt="logo" />
      </Link>
      <div
        className="nav__drop-icon"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="nav__drop" src={Drop} alt="drop"></img>
        {dropdown && <Dropdown />}
      </div>
    </nav>
  );
}

export default Nav;
