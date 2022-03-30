import React from "react";
import { Link } from "react-router-dom";
import Reel from "../../assets/icons/fly-reel.svg";
import Rod from "../../assets/icons/rod.svg";
import "./Rods.scss";

function Rods() {
  return (
    <section className="rods">
      <Link className="lures__link" to="/">
        <div className="rods__button">
          <img className="rods__icon" src={Rod} alt="rod-icon" />
          <p className="rods__subtitles">Spinning Rods</p>
        </div>
      </Link>
      <Link className="lures__link" to="/">
        <div className="rods__button">
          <img className="rods__icon" src={Reel} alt="crankbait-icon" />
          <p className="rods__subtitles">Spinning Reel</p>
        </div>
      </Link>
      <Link className="lures__link" to="/">
        <div className="rods__button">
          <img className="rods__icon" src={Rod} alt="crankbait-icon" />
          <p className="rods__subtitles">Fly Rods</p>
        </div>
      </Link>
      <Link className="lures__link" to="/">
        <div className="rods__button">
          <img className="rods__icon" src={Reel} alt="crankbait-icon" />
          <p className="rods__subtitles">Fly Reel</p>
        </div>
      </Link>
    </section>
  );
}

export default Rods;
