import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Images from "../../assets/icons/index";
import "./Rods.scss";

function Rods() {
  return (
    <motion.section className="rods"
    initial={{opacity: 0, x:'-100%'}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x:'-100%'}}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="rods__button">
            <img className="rods__icon" src={Images.Rod} alt="rod-icon" />
          </div>
          <p className="rods__subtitles">Spinning Rods</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="rods__button">
            <img className="rods__icon" src={Images.FlyReel} alt="crankbait-icon" />
          </div>
          <p className="rods__subtitles">Spinning Reel</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="rods__button">
            <img className="rods__icon" src={Images.Rod} alt="crankbait-icon" />
          </div>
          <p className="rods__subtitles">Fly Rods</p>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Link className="lures__link" to="/">
          <div className="rods__button">
            <img className="rods__icon" src={Images.FlyReel} alt="crankbait-icon" />
          </div>
          <p className="rods__subtitles">Fly Reel</p>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Rods;
