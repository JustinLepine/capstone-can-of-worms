import React, { useEffect, useState } from "react";
import CrankbaitIcon from "../../assets/icons/crankbait-dark.svg";
import "./Crankbait.scss";
import tools from "../../utils/tools";

const loading = [{
  "title":"og tiny",
  "depth":"4'",
  "target":"bass"
}]

function Crankbait() {
  const [inv, setInv] = useState(loading);

  useEffect(() => {
    tools
      .getInv()
      .then((res) => {
        setInv(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(function () {});
  }, []);

  return (
    <section className="crankbait">
      <div className="crankbait__top">
        <h1 className="crankbait__title">Crankbait</h1>
        <img
          className="crankbait__icon"
          src={CrankbaitIcon}
          alt="crankbait icon"
        />
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
          {inv.map((item, index) => {
            return (
              <div className="crankbait__info">
                <li className="crankbait__data" key={index}>{item.title}</li>
                <li className="crankbait__data">{item.depth}</li>
                <li className="crankbait__data">{item.target}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Crankbait;
