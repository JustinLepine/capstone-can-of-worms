import React, { useEffect, useState } from "react";
import FrogIcon from "../../assets/icons/frog-dark.svg";
import Delete from "../../assets/icons/delete.svg";
import "./Frog.scss";
import tools from "../../utils/tools";
import axios from "axios";

function Frog() {
  const [inv, setInv] = useState([]);

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

    console.log(id)
    axios
      .delete("http://localhost:8080/inventory", {
        data: {id: id}
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

  };

  return (
    <section className="frog">
      <div className="frog__top">
        <h1 className="frog__title">Frogs</h1>
        <img className="frog__icon" src={FrogIcon} alt="frog icon" />
      </div>
      <p>needs content and correct inv</p>
      <div className="frog__inv">
        <div className="frog__subtitles">
          <h4>Name</h4>
          <h4>Depth</h4>
          <h4>Target</h4>
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
    </section>
  );
}

export default Frog;
