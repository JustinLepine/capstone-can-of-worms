import React from "react";
import DropdownLinks from './DropdownLinks'
import { Link } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {

  return (
    <div>
        <ul className="dropdown">
            {DropdownLinks.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.linkName} to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Dropdown