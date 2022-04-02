import React, { useState } from "react";
import Logo from "../../assets/icons/can_of_worms.svg";
import Drop from "../../assets/icons/drop_down.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  const [showDrop, setShowDrop] = useState(false);

  const onClick = () => {
    setShowDrop(!showDrop);
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__logo" src={Logo} alt="logo" />
      </Link>
      <Link to="/">
        <h2 className="nav__title">Can of Worms.</h2>
      </Link>
      <div className="nav__drop-icon" onClick={onClick}>
        <img className="nav__drop" src={Drop} alt="drop"></img>
        {showDrop && <Dropdown />}
      </div>
    </nav>
  );
}

export default Nav;
