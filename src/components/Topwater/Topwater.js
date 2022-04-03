import React, { useEffect, useState } from "react";
import Popper from "../../assets/icons/popper-dark.svg";
import "./Topwater.scss";
import tools from "../../utils/tools";

const loading = [
  {
    title: "og tiny",
    depth: "4'",
    target: "bass",
  },
];

function Topwater() {
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
    <section className="topwater">
      <div className="topwater__top">
        <h1 className="topwater__title">Top Water</h1>
        <img className="topwater__icon" src={Popper} alt="topwater icon" />
      </div>
      <p>needs content and correct inv</p>
      <div className="topwater__inv">
        <div className="topwater__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
        </div>
        <ul className="topwater__list">
          {inv
            .filter((selected) => selected.category === "softbait")
            .map((item, index) => {
              return (
                <div key={index} className="topwater__info">
                  <li className="topwater__data">{item.title}</li>
                  <li className="topwater__data">{item.depth}</li>
                  <li className="topwater__data">{item.target}</li>
                </div>
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Topwater;
