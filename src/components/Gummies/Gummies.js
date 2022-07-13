import React, { useEffect, useState } from "react";
import Images from "../../assets/icons/index";
import { useHistory } from "react-router-dom";
import { API_URL } from '../../config/index.js'
import { motion } from "framer-motion";
import "./Gummies.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Gummies() {
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
    <motion.section className="gummies"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="gummies__top">
        <h1 className="gummies__title">Soft Baits</h1>
        <img className="gummies__icon" src={Images.GummyDark} alt="gummies icon" />
      </div>
      <p>
        Soft bait are hybrid plastic lures made to look like worms and other
        small creatures. They are very effective in areas with a lot of weeds
        and obstacles. You are able to hide the hook inside the soft bait to
        avoided getting snagged on objects. The down side to soft baits is that
        they are not reusable in most cases.
      </p>
      <div className="gummies__inv">
        <div className="gummies__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
          <h4>Delete</h4>
        </div>
        <ul className="gummies__list">
          {inv
            .filter((selected) => selected.category === "softbait")
            .map((item, index) => {
              return (
                <div key={index} className="gummies__info">
                  <li className="gummies__data">{item.title}</li>
                  <li className="gummies__data">{item.depth}</li>
                  <li className="gummies__data">{item.target}</li>
                  <button className="gummies__delete" onClick={ () => deleteHandler(item.id)}>
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
        className="gummies__back"
        src={Images.BackIcon}
        alt="back"
      />
    </motion.section>
  );
}

export default Gummies;
