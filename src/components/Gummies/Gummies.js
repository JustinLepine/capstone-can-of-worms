import React from 'react'
import Gummy from "../../assets/icons/gummy_icon-dark.svg";
import './Gummies.scss'

function Gummies() {
  return (
    <section className="gummies">
    <div className="gummies__top">
      <h1 className="gummies__title">Soft Baits</h1>
      <img className="gummies__icon" src={Gummy} alt="gummies icon" />
    </div>
    <p>
      Soft bait are hybrid plastic lures made to look like worms and other small creatures. They are very effective in areas with a lot of weeds and obstacles. You are able to hide the hook inside the soft bait to avoided getting snagged on objects. The down side to soft baits is that they are not reusable in most cases.
    </p>
    <div className="gummies__inv">
      <div className="gummies__subtitles">
        <h4>Name</h4>
        <h4>Depth</h4>
        <h4>Target</h4>
      </div>
      <ul className="gummies__list">
        <li>Bandito Bug</li>
        <li>4' - 7'</li>
        <li>Bass</li>
      </ul>
    </div>
  </section>
  )
}

export default Gummies