import React, { useEffect, useState } from "react";
import CrankbaitIcon from "../../assets/icons/crankbait-dark.svg";
import { motion } from "framer-motion";
import Delete from "../../assets/icons/delete.svg";
import Back from "../../assets/icons/back-icon.svg";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../config/index.js'
import "./Crankbait.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Crankbait() {
  const [inv, setInv] = useState([]);
  const history = useHistory();

  const backClick = () => {
    history.goBack();
  };

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
  }, [inv]);

  const deleteHandler = (id) => {
    axios
      .delete(`${API_URL}/inventory`, {
        data: { id: id },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.section className="crankbait"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
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
        bait usually takes shape of a small and or injured fish. Most crankbaits
        include a diving bill to dive the bait lower into the water, longer the
        bill deeper they dive when reeling in.
      </p>
      <div className="crankbait__inv">
        <div className="crankbait__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
          <h4>Delete</h4>
        </div>
        <ul className="crankbait__list">
          {inv
            .filter((selected) => selected.category === "crankbait")
            .map((item, index) => {
              return (
                <div key={index} className="crankbait__info">
                  <li className="crankbait__data">{item.title}</li>
                  <li className="crankbait__data">{item.depth}</li>
                  <li className="crankbait__data">{item.target}</li>
                  <button
                    className="crankbait__delete"
                    onClick={() => deleteHandler(item.id)}
                  >
                    <img src={Delete} alt="delete" />
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
      <img
        onClick={backClick}
        className="crankbait__back"
        src={Back}
        alt="back"
      />
    </motion.section>
  );
}

export default Crankbait;
