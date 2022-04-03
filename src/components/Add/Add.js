import React from "react";
import "./Add.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Add() {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/inventory", {
        title: e.target.inputTitle.value,
        depth: e.target.inputDepth.value,
        target: e.target.inputTarget.value,
        category: e.target.inputCategory.value,
      })
      .then((_res) => {
        history.push(`/`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="add">
      <h1 className="add__title">Add New Baits</h1>
      <form onSubmit={submitHandler} className="add__form">
        <h5 className="add__subtitle">TITLE</h5>
        <textarea className="add__input" name="inputTitle"></textarea>
        <h5 className="add__subtitle">DEPTH</h5>
        <textarea className="add__input" name="inputDepth"></textarea>
        <h5 className="add__subtitle">TARGET FISH</h5>
        <textarea className="add__input" name="inputTarget"></textarea>
        <h5 className="add__subtitle">CATEGORY</h5>
        <div className="add__radio">
          <div>
            <input type="radio" name="inputCategory" value="crankbait" />
            <label>CRANKBAIT</label>
          </div>
          <div>
            <input type="radio" name="inputCategory" value="softbait" />
            <label>SOFTBAIT</label>
          </div>
          <div>
            <input type="radio" name="inputCategory" value="topwater" />
            <label>TOPWATER</label>
          </div>
          <div>
            <input type="radio" name="inputCategory" value="frogs" />
            <label>FROGS</label>
          </div>
        </div>
        <button className="add__button">ADD</button>
      </form>
    </section>
  );
}

export default Add;
