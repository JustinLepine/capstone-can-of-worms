import React from "react";
import { Link } from "react-router-dom";
import Crankbait from "../../assets/icons/crankbait.svg";
import Hook from "../../assets/icons/hook.svg";
import Rod from "../../assets/icons/rod.svg";
import Knot from "../../assets/icons/knot_icon.svg";
import "./Dash.scss";

function Dash() {
  return (
    <section className="dash">
      <Link className="dash__link" to="/lures">
        <div className="dash__button">
          <img className="dash__icon" src={Crankbait} alt="crankbait-icon" />
        </div>
          <p className="dash__subtitles">Lures</p>
      </Link>
      <Link className="dash__link" to="/tackle">
        <div className="dash__button">
          <img className="dash__icon" src={Hook} alt="crankbait-icon" />
        </div>
          <p className="dash__subtitles">Tackle</p>
      </Link>
      <Link className="dash__link" to="/rods">
        <div className="dash__button">
          <img className="dash__icon" src={Rod} alt="crankbait-icon" />
        </div>
          <p className="dash__subtitles">Rods & Reels</p>
      </Link>
      <Link className="dash__link" to="/">
        <div className="dash__button">
          <img className="dash__icon" src={Knot} alt="crankbait-icon" />
        </div>
          <p className="dash__subtitles">Knots</p>
      </Link>
    </section>
  );
}

export default Dash;
