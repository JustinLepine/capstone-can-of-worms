import React from "react";
import DropdownLinks from '../DropdownLinks/DropdownLinks'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import "./Dropdown.scss";

function Dropdown() {

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
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
    </motion.div>
  )
}

export default Dropdown