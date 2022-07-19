import React from "react";
import DropdownLinks from './DropdownLinks'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {

  return (
    <motion.div className="dropdown"
    initial={{opacity: 0, translateY:'-100%'}}
    animate={{opacity: 1, translateY: '-0%'}}
    exit={{opacity: 0, translateY:'-100%' }}
    >
        <ul className="dropdown__list">
            {DropdownLinks.map((item, index) => {
                return (
                    <li className='dropdown__link' key={index}>
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </motion.div>
  )
}

export default Dropdown;