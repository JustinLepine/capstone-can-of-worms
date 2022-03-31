import React, { useState } from "react";
import DropdownLinks from '../DropdownLinks/DropdownLinks'
import { Link } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <>
        <ul onClick={handleClick}
        className={click ? 'dropdown clicked' : 'dropdown'}>
            {DropdownLinks.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.linkName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default Dropdown