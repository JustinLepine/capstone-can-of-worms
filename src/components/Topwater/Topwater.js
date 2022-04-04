import React, { useEffect, useState } from "react";
import Popper from "../../assets/icons/popper-dark.svg";
import Delete from "../../assets/icons/delete.svg";
import "./Topwater.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Topwater() {
  const [inv, setInv] = useState([]);
  // const [delInv, setDelInv] = useState({
  //   title: "",
  //   depth: "",
  //   target: "",
  // })

  // const handleChange = (event) => {
  //   event.preventDefault();

  // }
  
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
      .delete("http://localhost:8080/inventory", {
        id: id
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

  };

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
                        src={Delete}
                        alt="delete"
                      />
                    </button>
                  </div>                
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Topwater;
