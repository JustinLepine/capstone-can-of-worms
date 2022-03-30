import React from "react";
import Hook from '../../assets/icons/hook.svg';
import Spoon from '../../assets/icons/spoon.svg';
import Jig from '../../assets/icons/duo-hook.svg';
import Weight from '../../assets/icons/weight.svg';
import './Tackle.scss';

function Tackle() {
  return (
    <section className="tackle">
      <div className="tackle__button">
        <img className="tackle__icon" src={Hook} alt="crankbait-icon" />
        <p className="tackle__subtitles">Hooks</p>
      </div>
      <div className="tackle__button">
        <img className="tackle__icon" src={Spoon} alt="crankbait-icon" />
        <p className="tackle__subtitles">Spoons</p>
      </div>
      <div className="tackle__button">
        <img className="tackle__icon" src={Jig} alt="crankbait-icon" />
        <p className="tackle__subtitles">Jigs</p>
      </div>
      <div className="tackle__button">
        <img className="tackle__icon" src={Weight} alt="crankbait-icon" />
        <p className="tackle__subtitles">Weights</p>
      </div>
    </section>
  );
}

export default Tackle;
