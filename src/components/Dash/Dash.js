import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DashList from "./DashList";
import "./Dash.scss";

function Dash() {
  const whileHover = {scale: 1.05}
  const whileTap={ scale: 0.9 }
  const datas = DashList;

  return (
    <motion.section className="dash"
    initial={{opacity: 0, x:'-100%'}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x:'-100%'}}
    >
    {datas.map((item, index) => {
      return (
        <motion.div key={index} whileHover={whileHover} whileTap={whileTap}>
        <Link className="dash__link" to={item.to}>
          <div className="dash__button">
            <img className="dash__icon" src={item.image} alt={item.alt} />
          </div>
          <p className="dash__subtitles">{item.subtitle}</p>
        </Link>
      </motion.div>
        )
    })}
    </motion.section>
  );
}

export default Dash;