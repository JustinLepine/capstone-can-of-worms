import React, { useEffect, useState } from "react";
import FrogIcon from "../../assets/icons/frog-dark.svg";
import "./Frog.scss";
import tools from "../../utils/tools";

const loading = [{
  "title":"og tiny",
  "depth":"4'",
  "target":"bass"
}]

function Frog() {
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
    <section className="frog">
      <div className="frog__top">
        <h1 className="frog__title">Frogs</h1>
        <img
          className="frog__icon"
          src={FrogIcon}
          alt="frog icon"
        />
      </div>
      <p>
        needs content and correct inv
      </p>
      <div className="frog__inv">
        <div className="frog__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
        </div>
        <ul className="frog__list">
          {inv.map((item, index) => {
            return (
              <div  key={index} className="frog__info">
                <li className="frog__data">{item.title}</li>
                <li className="frog__data">{item.depth}</li>
                <li className="frog__data">{item.target}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Frog;
