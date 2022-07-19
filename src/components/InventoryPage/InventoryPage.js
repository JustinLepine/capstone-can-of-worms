import React, { useEffect, useState } from "react";
import Images from "../../assets/icons/index";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import { API_URL } from '../../config/index.js'
import InventorySections from "../InventoryPage/InventorySections";
import './InventoryPage.scss'
import tools from "../../utils/tools";
import axios from "axios";

function InventoryPage( props ) {
  const [inv, setInv] = useState([]);  
  const history = useHistory();
  const { category } = props;
  const data = InventorySections;
  
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
  }, []);

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
    <motion.section className='inventory'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <div className="inventory__top">
        <h1 className="inventory__title">{data[category].title}</h1>
        <img
          className="inventory__icon"
          src={data[category].logo}
          alt="crankbait icon"
        />
      </div>
      <p>{data[category].content}</p>
      <div className="inventory__inv">
        <div className="inventory__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
          <h4>Delete</h4>
        </div>
        <ul className="inventory__list">
          {inv
            .filter((selected) => selected.category === data[category].category)
            .map((item, index) => {
              return (
                <div key={index} className="inventory__info">
                  <li className="inventory__data">{item.title}</li>
                  <li className="inventory__data">{item.depth}</li>
                  <li className="inventory__data">{item.target}</li>
                  <button
                    className="inventory__delete"
                    onClick={() => deleteHandler(item.id)}
                  >
                    <img src={Images.Delete} alt="delete" />
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
      <div className="inventory__buttons">
        <img
          onClick={backClick}
          className="inventory__back"
          src={Images.BackIcon}
          alt="back"
          />
        <Link to="/add">
          <img className="inventory__add" src={Images.AddIcon} alt='add' />
        </Link>
      </div>      
    </motion.section>
  );
}

export default InventoryPage;
