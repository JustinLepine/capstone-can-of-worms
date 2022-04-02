import React from "react";
import CrankbaitIcon from "../../assets/icons/crankbait-dark.svg";
import "./Crankbait.scss";

function Crankbait() {
  return (
    <section className="crankbait">
      <div className="crankbait__top">
        <h1 className="crankbait__title">Crankbait</h1>
        <img className="crankbait__icon" src={CrankbaitIcon} alt="crankbait icon" />
      </div>
      <p>
        Crankbait is a fishing lure often made from hard ABS plastic, some have
        metal bearings inside to create noise and attract predator fish. The
        bait usually takes shape of a small fish, and or an injured fish. Most
        crankbaits include a diving bill to dive the bait lower into the water,
        longer the bill deeper they dive when reeling in.
      </p>
      <div className="crankbait__inv">
        <div className="crankbait__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
        </div>
        <ul className="crankbait__list">
          <li>Shad Rap</li>
          <li>4' - 7'</li>
          <li>Bass</li>
        </ul>
      </div>
    </section>
  );
}

export default Crankbait;
