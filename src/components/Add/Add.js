import React from 'react'
import "./Add.scss";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Add() {

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8080/inventory', {
                title: e.target.inputTitle.value,
                depth: e.target.inputDepth.value,
                target: e.target.inputTarget.value
        })
        .then(_res => {
            history.push(`/`)
        })
        .catch(err => console.log(err))
    }

  return (
    <section className='add'>
        <h1 className='add__title'>Add New Baits</h1>
        <form onSubmit={submitHandler} className='add__form'>
            <h5 className='add__subtitle'>TITLE</h5>
            <textarea className='add__input' name='inputTitle'></textarea>
            <h5 className='add__subtitle'>DEPTH</h5>
            <textarea className='add__input' name='inputDepth'></textarea>
            <h5 className='add__subtitle'>TARGET FISH</h5>
            <textarea className='add__input' name='inputTarget'></textarea>
            <button className='add__button'>ADD</button>
        </form>
    </section>
  )
}

export default Add