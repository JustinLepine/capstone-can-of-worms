import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Crankbait from "../../assets/icons/crankbait.svg";
import Gummy from "../../assets/icons/gummy_icon.svg";
import Frog from "../../assets/icons/frog.svg";
import Popper from "../../assets/icons/popper.svg";
import "./Lures.scss";

function Lures() {
  return (
    <motion.section className="lures"
    initial={{opacity: 0, x:'-100%'}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x:'-100%'}}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/crankbait">
          <div className="lures__button">
            <img className="lures__icon" src={Crankbait} alt="crankbait-icon" />
          </div>
          <p className="lures__subtitles">Crankbait</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/softbait">
          <div className="lures__button">
            <img className="lures__icon" src={Gummy} alt="crankbait-icon" />
          </div>
          <p className="lures__subtitles">Soft Bait</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/topwater">
          <div className="lures__button">
            <img className="lures__icon" src={Popper} alt="crankbait-icon" />
          </div>
          <p className="lures__subtitles">Top Water</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/frog">
          <div className="lures__button">
            <img className="lures__icon" src={Frog} alt="crankbait-icon" />
          </div>
          <p className="lures__subtitles">Frogs</p>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Lures;
