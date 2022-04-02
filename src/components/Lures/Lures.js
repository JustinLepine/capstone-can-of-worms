import React from "react";
import { Link } from "react-router-dom";
import Crankbait from "../../assets/icons/crankbait.svg";
import Gummy from "../../assets/icons/gummy_icon.svg";
import Frog from "../../assets/icons/frog.svg";
import Popper from "../../assets/icons/popper.svg";
import "./Lures.scss";

function Lures() {
  return (
    <section className="lures">
      <Link className="lures__link" to="/crankbait">
        <div className="lures__button">
          <img className="lures__icon" src={Crankbait} alt="crankbait-icon" />
        </div>
          <p className="lures__subtitles">Lures</p>
      </Link>
      <Link className="lures__link" to="/softbait">
      <div className="lures__button">
        <img className="lures__icon" src={Gummy} alt="crankbait-icon" />
      </div>
        <p className="lures__subtitles">Gummies</p>
      </Link>
      <Link className="lures__link" to="/">
      <div className="lures__button">
        <img className="lures__icon" src={Popper} alt="crankbait-icon" />
      </div>
        <p className="lures__subtitles">Top Water</p>
      </Link>
      <Link className="lures__link" to="/">
      <div className="lures__button">
        <img className="lures__icon" src={Frog} alt="crankbait-icon" />
      </div>
        <p className="lures__subtitles">Frogs</p>
      </Link>
    </section>
  );
}

export default Lures;
