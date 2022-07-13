import React, { useEffect, useState } from "react";
import Images from "../../assets/icons/index";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../config/index.js'
import { motion } from "framer-motion";
import "./Topwater.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Topwater() {
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
    <motion.section className="topwater"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="topwater__top">
        <h1 className="topwater__title">Top Water</h1>
        <img className="topwater__icon" src={Images.PopperDark} alt="topwater icon" />
      </div>
      <p>Topwater bait are also known as surface lures. These lures are often made from wood or plastic and are designed to float. In this category there are 3 popuplar types (poppers, walkers, and wobblers). These lures are cast out and retrieved slowly, some splash around to attract predators.</p>
      <div className="topwater__inv">
        <div className="topwater__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
          <h4>Delete</h4>
        </div>
        <ul className="topwater__list">
          {inv
            .filter((selected) => selected.category === "topwater")
            .map((item, index) => {
              return (                
                  <div key={index} className="topwater__info">
                    <li className="topwater__data">{item.title}</li>
                    <li className="topwater__data">{item.depth}</li>
                    <li className="topwater__data">{item.target}</li>
                    <button className="topwater__delete" onClick={ () => deleteHandler(item.id)}>
                      <img
                        src={Images.Delete}
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
        className="topwater__back"
        src={Images.BackIcon}
        alt="back"
      />
    </motion.section>
  );
}

export default Topwater;
