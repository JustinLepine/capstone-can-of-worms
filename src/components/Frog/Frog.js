import React, { useEffect, useState } from "react";
import FrogIcon from "../../assets/icons/frog-dark.svg";
import Delete from "../../assets/icons/delete.svg";
import Back from "../../assets/icons/back-icon.svg";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../config/index.js'
import { motion } from "framer-motion";
import "./Frog.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Frog() {
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
        data: {id: id}
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.section className="frog"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="frog__top">
        <h1 className="frog__title">Frogs</h1>
        <img className="frog__icon" src={FrogIcon} alt="frog icon" />
      </div>
      <p>Frog lures can be considered topwater lures but mimic the typical frog and its movements. They float on the top of the water and can be skipped across lily pads. With hooks hidden inside of the soft plastic body this lure is sure to catch larger fish looking for a snack.</p>
      <div className="frog__inv">
        <div className="frog__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
          <h4>Delete</h4>
        </div>
        <ul className="frog__list">
          {inv
            .filter((selected) => selected.category === "frogs")
            .map((item, index) => {
              return (
                <div key={index} className="frog__info">
                  <li className="frog__data">{item.title}</li>
                  <li className="frog__data">{item.depth}</li>
                  <li className="frog__data">{item.target}</li>
                  <button className="frog__delete" onClick={ () => deleteHandler(item.id)}>
                      <img
                        src={Delete}
                        alt="delete"
                      />
                    </button>
                </div>
              );
            })}
        </ul>
      </div>
      <img
        onClick={backClick}
        className="frog__back"
        src={Back}
        alt="back"
      />
    </motion.section>
  );
}

export default Frog;
