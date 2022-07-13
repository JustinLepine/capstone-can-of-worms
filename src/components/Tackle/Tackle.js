import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Images from "../../assets/icons/index";
import "./Tackle.scss";

function Tackle() {
  return (
    <motion.section className="tackle"
    initial={{opacity: 0, x:'-100%'}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x:'-100%'}}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="tackle__button">
            <img className="tackle__icon" src={Images.Hook} alt="crankbait-icon" />
          </div>
          <p className="tackle__subtitles">Hooks</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="tackle__button">
            <img className="tackle__icon" src={Images.Spoon} alt="crankbait-icon" />
          </div>
          <p className="tackle__subtitles">Spoons</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="tackle__button">
            <img className="tackle__icon" src={Images.DuoHook} alt="crankbait-icon" />
          </div>
          <p className="tackle__subtitles">Jigs</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="tackle__button">
            <img className="tackle__icon" src={Images.Weight} alt="crankbait-icon" />
          </div>
          <p className="tackle__subtitles">Weights</p>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Tackle;
