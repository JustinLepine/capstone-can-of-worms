import React from "react";
import Images from "../../assets/icons/index";
import Dropdown from "../Dropdown/Dropdown";
import "./Nav.scss";
import { Link } from "react-router-dom";
import { useDropToggle } from "../../hooks/useDropToggle";

function Nav() {
  const { toggle: showDrop, toggleStatus: onClick } = useDropToggle();

  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__logo" src={Images.CanOfWorms} alt="logo" />
      </Link>
      <Link to="/">
        <h2 className="nav__title">Can of Worms.</h2>
      </Link>
      <div className="nav__drop-icon" onClick={onClick}>
        <img className="nav__drop" src={Images.DropDown} alt="drop"></img>
        {showDrop && <Dropdown />}
      </div>
    </nav>
  );
}

export default Nav;
