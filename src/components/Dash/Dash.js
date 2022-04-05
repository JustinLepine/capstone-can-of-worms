import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Crankbait from "../../assets/icons/crankbait.svg";
import Hook from "../../assets/icons/hook.svg";
import Rod from "../../assets/icons/rod.svg";
import Knot from "../../assets/icons/knot_icon.svg";
import "./Dash.scss";

function Dash() {
  return (
    <motion.section className="dash"
    initial={{opacity: 0, x:'-100%'}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x:'-100%'}}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="dash__link" to="/lures">
          <div className="dash__button">
            <img className="dash__icon" src={Crankbait} alt="crankbait-icon" />
          </div>
          <p className="dash__subtitles">Lures</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="dash__link" to="/tackle">
          <div className="dash__button">
            <img className="dash__icon" src={Hook} alt="crankbait-icon" />
          </div>
          <p className="dash__subtitles">Tackle</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="dash__link" to="/rods">
          <div className="dash__button">
            <img className="dash__icon" src={Rod} alt="crankbait-icon" />
          </div>
          <p className="dash__subtitles">Rods & Reels</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="dash__link" to="/">
          <div className="dash__button">
            <img className="dash__icon" src={Knot} alt="crankbait-icon" />
          </div>
          <p className="dash__subtitles">Knots</p>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Dash;
