import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Add.scss";
import { API_URL } from '../../config/index.js';
import axios from "axios";

function Add() {
  const [inputValue, setInputValue] = useState();

  const handleUserInput = (e) => {
    console.log(inputValue)
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    document.getElementById('form').reset()
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/inventory`, {
        title: e.target.inputTitle.value,
        depth: e.target.inputDepth.value,
        target: e.target.inputTarget.value,
        category: e.target.inputCategory.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <motion.section className="add"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1 className="add__title">Add New Baits</h1>
      <form id="form" onSubmit={submitHandler} className="add__form">
        <h5 className="add__subtitle">TITLE</h5>
        <input onChange={handleUserInput} className="add__input" name="inputTitle"></input>
        <h5 className="add__subtitle">DEPTH</h5>
        <input onChange={handleUserInput} className="add__input" name="inputDepth"></input>
        <h5 className="add__subtitle">TARGET FISH</h5>
        <input onChange={handleUserInput} className="add__input" name="inputTarget"></input>
        <h5 className="add__subtitle">CATEGORY</h5>
        <div className="add__radio">
          <div className="add__radio">
            <input type="radio" name="inputCategory" value="crankbait" />
            <label className="add__radio-label">CRANKBAIT</label>
          </div>
          <div className="add__radio">
            <input type="radio" name="inputCategory" value="softbait" />
            <label className="add__radio-label">SOFTBAIT</label>
          </div>
          <div className="add__radio">
            <input type="radio" name="inputCategory" value="topwater" />
            <label className="add__radio-label">TOPWATER</label>
          </div>
          <div className="add__radio">
            <input type="radio" name="inputCategory" value="frogs" />
            <label className="add__radio-label">FROGS</label>
          </div>
        </div>
        <div className="add__button-box">
          <button type="button" onClick={resetInputField} className="add__button">RESET</button>
          <button type="submit" className="add__button">ADD</button>
        </div>
      </form>
    </motion.section>
  );
}

export default Add;
